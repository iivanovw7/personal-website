import { useEffect, useRef, useState } from 'react';

import envProps from '../env';

const { isObserverSupported } = envProps;

/**
 * Defines intersection observer hook which takes element ref,
 *      margin and threshold and then returns intersection ration.
 * @param {Element | null} [root = null] - target element.
 * @param {string} [rootMargin = '0px'] CSS Margin around the root.
 * @param {number} [threshold = 0]
 *      A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option,
 *      the callback is invoked.
 * @return {Array} returns the setNode function and entry.
 */
function useIntersect({ root = null, rootMargin = '0px', threshold = 0 }) {
    const [entry, updateEntry] = useState({});
    const [node, setNode] = useState(null);

    if (isObserverSupported) {
        const observer = useRef(
            // eslint-disable-next-line no-shadow
            new window.IntersectionObserver(([entry]) => updateEntry(entry), {
                root,
                rootMargin,
                threshold,
            })
        );

        useEffect(
            () => {
                const { current: currentObserver } = observer;
                currentObserver.disconnect();

                if (node) {
                    currentObserver.observe(node);
                }

                return () => currentObserver.disconnect();
            },
            [node]
        );
    }

    return [setNode, entry];
}

export default useIntersect;
