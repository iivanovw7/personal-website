import { MutableRefObject, useRef, useEffect, useState } from 'react';
import ResizeObserverPolyfill from 'resize-observer-polyfill';

/**
 * Used to components ref`s scroll height.
 * @return {Array.<MutableRefObject<Element | undefined>, number>}
 *      Array which contains ref and height value.
 */
const useScrollHeight = (): [MutableRefObject<Element | undefined>, number] => {
    const ref = useRef<Element>();
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const resizeObserver = new ResizeObserverPolyfill(([entry]) => {
            setHeight(entry.target.scrollHeight);
        });

        if (ref.current) {
            resizeObserver.observe(ref.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return [ref, height];
};

export default useScrollHeight;
