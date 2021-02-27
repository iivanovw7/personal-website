/**
 * Module contains application gulp tasks
 * @module _/gulpfile.js
 * @author Igor Ivanov
 */
const critical = require('critical').stream;
const gulp = require('gulp');
const rename = require('gulp-rename');
const zip = require('gulp-zip');
const args = require('minimist')(process.argv.slice(2));

const fs = require('fs');

/**
 * Handling gulp error, breaks task execution and trows an error
 * @param {Object} err - error object
 * @return {void}
 */
function handleError(err) {
    process.exit(-1);
    throw new Error(err.toString());
}

/**
 * Creates directories if they does not exist.
 * @function
 * @return {Promise} gulp task
 */
gulp.task('createFilePaths', async function createFilePaths() {
    const folders = ['dist', 'dist/assets', 'dist/assets/svg', 'dist/assets/img', 'dist/assets/public'];

    folders.forEach((dir) => {
        if (! fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            // eslint-disable-next-line no-console
            console.log('📁folder created:', dir);
        }
    });
});

/**
 * Copying all svg files in application img/svg
 * @function
 * @return {Promise} gulp task
 */
gulp.task('copySvgFiles', async function copySvgFiles() {
    await new Promise((resolve) => {
        gulp.src('./assets/svg/**/*.*')
            .pipe(gulp.dest('./dist/assets/svg/'))
            .on('end', resolve)
            .on('error', handleError);
    });
});

/**
 * Copying production favicon
 * @function
 * @return {Promise} gulp task
 */
gulp.task('copyProdFavicon', async function copyProdFavicon() {
    await new Promise((resolve) => {
        gulp.src('./assets/icons/prod-favicon.png')
            .pipe(rename('favicon.png'))
            .pipe(gulp.dest('./dist/assets/img/'))
            .on('end', resolve)
            .on('error', handleError);
    });
});

/**
 * Creates build folder archive in dist folder
 * @function
 * @return {Function} gulp task
 */
gulp.task('createZip', async function createZip() {
    const flag = args.zip;
    await new Promise((resolve) => {
        if (flag && flag !== 'false') {
            // eslint-disable-next-line no-negated-condition
            const fileName = `${flag !== 'true'
                ? flag
                : 'archive'}.zip`;
            gulp.src('./dist/*')
                .pipe(zip(fileName))
                .pipe(gulp.dest('./dist'))
                .on('end', resolve)
                .on('error', handleError);
        }
        resolve();
    });
});

/**
 * Adds inline critical css styles
 * @function
 * @return {Promise} gulp task
 */
gulp.task('criticalCSS', async function criticalCSS() {
    await new Promise((resolve) => {
        gulp.src('dist/*.html')
            .pipe(
                critical({
                    base: 'dist/',
                    inline: true,
                    css: ['./assets/css/critical.css'],
                })
            )
            .pipe(gulp.dest('dist'))
            .on('end', resolve)
            .on('error', handleError);
    });
});

/**
 * Copying all files that should be placed in application root folder
 * @function
 * @return {Promise} gulp task
 */
gulp.task('copyRootFiles', async function copyRootFiles() {
    await new Promise((resolve) => {
        gulp.src('./assets/public/*.*')
            .pipe(gulp.dest('./dist/'))
            .on('end', resolve)
            .on('error', handleError);
    });
});

/**
 * Combines gulp tasks in `postbuild` task.
 */
gulp.task(
    'postbuild',
    gulp.parallel(
        'createFilePaths',
        'copyRootFiles',
        'copySvgFiles',
        'copyProdFavicon',
        'criticalCSS',
        'createZip'
    )
);
