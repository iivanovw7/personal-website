/**
 * Module contains media observer hook
 * @module utils/hooks/useMedia
 */
import { useEffect, useState } from 'react';

/**
 * Hook determines current media breakpoint.
 *
 * @param {Array.<string>} queries - media queries list.
 * @param {Array.<*>} values - values list.
 * @param {*} defaultValue
 *  default value is being set in case index value not found.
 * @return {*} value
 *  returns value according to current media config, or default value.
 *
 * @see {@link https://usehooks.com/useMedia/}
 *
 * @example
 *  const skip = useMedia(
 *    // Media queries
 *    [
 *      `(max-width: ${breakpoints.xs}px)`,
 *      `(max-width: ${breakpoints.md}px)`,
 *      `(min-width: ${breakpoints.lg}px)`
 *    ], [1, 2, 3], 1
 *  );
 */
function useMedia(queries, values, defaultValue) {
    // Array containing a media query list for each query
    const mediaQueryLists = queries.map((q) => window.matchMedia(q));

    // Function that gets value based on matching media query
    const getValue = () => {
        // Get index of first media query that matches
        const index = mediaQueryLists.findIndex((mql) => mql.matches);

        // Return related value or defaultValue if none
        // eslint-disable-next-line no-negated-condition
        return typeof values[index] !== 'undefined'
            ? values[index]
            : defaultValue;
    };

    // State and setter for matched value
    const [value, setValue] = useState(getValue);

    useEffect(
        () => {
            // Event listener callback
            // Note: By defining getValue outside of useEffect we ensure that it has ...
            // ... current values of hook args (as this hook callback is created once on mount).
            const handler = () => setValue(getValue);
            // Set a listener for each media query with above handler as callback.
            mediaQueryLists.forEach((mql) => mql.addListener(handler));

            // Remove listeners on cleanup
            return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
        },
        [] // Empty array ensures effect is only run on mount and unmount
    );

    return value;
}

export default useMedia;
