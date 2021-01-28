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
     * Base path.
     */
    base: '', // replaced with empty string in order to be skipped during navigation link creation '/'
    /**
     * Posts path.
     */
    posts: '/posts',
};

/**
 * Contains application routes.
 * @readonly
 * @enum {string}
 */
export const routes = {
    /**
     * Base route.
     */
    base: basePath.base,
    /**
     * Posts route.
     */
    posts: basePath.posts,
    /**
     * Post route.
     */
    post: `${basePath.posts}/:postId`,
    /**
     * Posts search route.
     */
    postsSearch: `${basePath.posts}/search:query`,
};

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

export function hasPostId(path) {

    return isPostsAreaPath(path);
}
