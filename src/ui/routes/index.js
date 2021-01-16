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
     * Posts search route.
     */
    postsSearch: `${basePath.posts}/search:query`,
};
