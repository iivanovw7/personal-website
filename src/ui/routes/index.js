/**
 * Module contains application paths.
 * @module ui/routes
 */

/**
 * Contains base paths.
 * @readonly
 * @enum {string}
 */
export const basePath = {
    /**
     * Home path.
     */
    home: '/',
    /**
     * Posts path.
     */
    posts: '/posts',
    /**
     * Post path.
     */
    post: '/posts/view',
};

/**
 * Contains menu path map.
 * @readonly
 * @enum {string}
 */
export const menuPath = {
    /** Posts link path */
    posts: basePath.posts
};

/**
 * Contains application routes.
 * @readonly
 * @enum {string}
 */
export const routes = {
    /**
     * Home route.
     */
    home: basePath.home,
    /**
     * Posts route.
     */
    posts: basePath.posts,
    /**
     * Post route.
     */
    post: `${basePath.post}/:postId`,
    /**
     * Posts search route.
     */
    postsSearch: `${basePath.posts}/search:query`,
};


/**
 * Determines if passed path if home or not.
 * @param {string} path - location path.
 * @return {boolean}
 *      Returns `true` if passed path equals application home path.
 */
export function isHomePath(path) {
    return path === basePath.home;
}

/**
 * Verifies if area belongs to path.
 * @param {string} areaPath - area to be verified.
 * @param {string} path - location path.
 * @return {boolean}
 *      Returns `true` if passed areaPath belongs to passed `path` parameter, and `false` otherwise.
 */
export function isAreaPath(areaPath, path) {
    const areaPathWithSlash = `${areaPath}/`;

    return `${path}/`.substring(0, areaPathWithSlash.length) === areaPathWithSlash;
}

/**
 * Verifies if passed `path` is posts `path`.
 *
 * @param {string} path - location path.
 * @return {boolean}
 *      Returns `true` if passed `path` belongs to posts `path`.
 */
export function isPostsAreaPath(path) {
    return isAreaPath(basePath.posts, path);
}

/**
 * Verifies if passed `path` string belongs to post path.
 *
 * @param {string} path - location path.
 * @return {boolean}
 *      Returns `true` if passed `path` belongs to post `path`.
 */
export function isPostAreaPath(path) {
    return isAreaPath(basePath.post, path);
}
