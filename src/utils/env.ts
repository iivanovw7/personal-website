/**
 * Module contains environment related utils.
 * @module utils/env
 * @author Igor Ivanov
 */

/**
 * Requires all files in a directory.
 * @param {*} r require.context.
 * @return {void}
 */
export function requireAll(r) {
    r.keys().forEach(r);
}

/**
 * Defines `IntersectionObserver` support.
 * @return {boolean}
 *  returns `true` if IntersectionObserver is fully supported and `false` otherwise.
 */
const isObserverSupported = (): boolean =>
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype;

/**
 * Indicates whether the theme is set to dark or not.
 * @return {boolean}
 *  returns `true` if is in dark mode.
 */
const isDarkTheme = (): boolean => window.matchMedia('(prefers-color-scheme: dark)').matches;

export default {
    isObserverSupported: isObserverSupported(),
    isDarkTheme: isDarkTheme(),
};
