/**
 * Module contains environment related utils.
 * @module utils/env
 * @author Igor Ivanov
 */

/**
 * Reference to a specified element.
 * @param {HTMLElement} element - element to be calculated.
 * @return {DOMRect} rect object.
 */
export function getClientRect(element?: HTMLElement): DOMRect | undefined {
    return element?.getBoundingClientRect();
}

/**
 * Requires all files in a directory.
 * @param {*} r require.context.
 * @return {void}
 */
export function requireAll(r): void { // eslint-disable-line @typescript-eslint/explicit-module-boundary-types
    r.keys().forEach(r);
}

/**
 * Determines presence of window object.
 * @return {boolean} `true` if window is not `undefined` and false otherwise.
 */
const hasWindow = (): boolean => typeof window !== 'undefined';

/**
 * Defines `IntersectionObserver` support.
 * @return {boolean}
 *  returns `true` if IntersectionObserver is fully supported and `false` otherwise.
 */
const isObserverSupported = (): boolean => (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
);

/**
 * Indicates whether the theme is set to dark or not.
 * @return {boolean}
 *  returns `true` if is in dark mode.
 */
const isDarkTheme = (): boolean => window.matchMedia('(prefers-color-scheme: dark)').matches;

export default {
    isObserverSupported: isObserverSupported(),
    isDarkTheme: isDarkTheme(),
    isBrowser: hasWindow(),
};
