import { useRef, useEffect } from 'react';

/**
 * Gets previous value.
 * @param {any} value - target value.
 * @return {any} returns previous value (happens before update in useEffect above).
 */
const usePrevious = <T>(value: T): T | undefined => {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};

export default usePrevious;
