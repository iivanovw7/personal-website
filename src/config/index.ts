/**
 * Module contains main application configuration.
 * @module config
 */

import { DARK_THEME, logModeMap } from './constants';

export type RunningMode = 'test' | 'production' | 'development';

export const runningMode = CONFIG;

const { LOGGER_ERROR, LOGGER_DEBUG, LOGGER_OFF } = logModeMap;

const settings = {
    /**
     * Log level, can be set to below options:
     *  - error [default, only errors]
     *  - debug [all levels]
     *  - off   [no logging]
     * @type {string}
     */
    logLevel: LOGGER_ERROR,
    /**
     * Theme config.
     * @type {string}
     */
    theme: DARK_THEME,
    /**
     * Locale config.
     * Sets up default locale config.
     * @type {string}
     */
    locale: navigator.language || navigator['userLanguage'] || navigator['browserLanguage'], // eslint-disable-line
    /**
     * Social links.
     * Key is used to find appropriate icon in `assets/svg/social`.
     * Only fields with not empty string values are going to be rendered.
     * @see {@link module:components/TopBar}
     *
     * @type {Object.<string>}
     */
    social: {
        facebook: '',
        instagram: '',
        twitter: 'https://twitter.com/_IvanovIgor',
        youtube: '',
        github: 'https://github.com/iivanovw7',
        telegram: 'https://t.me/iivanovw7',
    },
    /**
     * Network config.
     * @type {Object}
     */
    net: {
        /**
         * Base the movie db API url.
         * @type {string}
         */
        tmdbUrl: 'https://api.themoviedb.org/3',
        /**
         * Base the movie db API image url.
         * @type {string}
         */
        tmdbImageUrl: 'https://image.tmdb.org',
        /**
         * Default request timeout.
         * @type {number}
         */
        requestTimeout: 10000,
        /**
         * GraphCMS `url`.
         * @type {string}
         */
        graphCmsUrl: 'https://api-eu-central-1.graphcms.com/v2/cki24xt1fy3b701z94v4gh9rp/master',
        /**
         * Google code `pretiffy` cdn url with params.
         * @type {string}
         */
        codePrettifyUrl: 'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=sunburst'
    },
};

/**
 *  Changes config according to application running mode.
 *
 *  @param {object} object
 *      initial settings.
 *  @param {string} mode
 *      application mode, defined during build by webpack.
 *  @returns {void} - adds modifications before exporting variable.
 *
 */
(function merge(object: typeof settings, mode: RunningMode): void {
    let logLevel = LOGGER_ERROR;

    if (mode === 'test') {
        logLevel = LOGGER_OFF;
    }
    if (mode === 'development') {
        logLevel = LOGGER_DEBUG;
    }

    Object.assign(object, { logLevel });

})(settings, runningMode);

export default settings;
