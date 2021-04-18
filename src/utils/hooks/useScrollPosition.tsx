/**
 * Module contains useScrollPosition hook.
 * @module utils/hooks/useScrollPosition
 * @see {@link https://github.com/n8tb1t/use-scroll-position/blob/master/src/useScrollPosition.tsx}
 */
import { useRef, DependencyList, MutableRefObject } from 'react';

import envProps, { getClientRect } from '../env';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

const { isBrowser } = envProps;

export interface IPosition {
    x: number;
    y: number;
}

export interface IScrollProps {
    prevPos: IPosition;
    currPos: IPosition;
    atBottom: boolean;
}

export interface IGetScrollPositionParams {
    element?: ElementRef;
    boundingElement?: ElementRef;
    useWindow?: boolean;
}

export interface IUseScrollPosition {
    /** Effect callback. */
    effect: (props: IScrollProps) => void,
    /** For effects to fire on selected dependencies change. */
    deps?: DependencyList,
    /** Get scroll position for a specified element by reference. */
    element?: ElementRef,
    /** Use window.scroll instead of document.body.getBoundingClientRect() to detect scroll position. */
    useWindow?: boolean,
    /** The timeout in ms. Good for performance. */
    wait?: number,
    /**
     * Only works with useWindow set to false, Just pass the element reference and the boundingElement - (parent container) reference and track their corresponding position,
     *      boundingElement should be scrollable with overflow hidden or whateverOnly works with useWindow set to false,
     * Just pass the element reference and the boundingElement - (parent container) reference and track their corresponding position,
     *      boundingElement should be scrollable with overflow hidden or whatever
     */
    boundingElement?: ElementRef
}

type ElementRef = MutableRefObject<HTMLElement | undefined>;

const zeroPosition: IPosition = { x: 0, y: 0 };

const getScrollPosition = (params: IGetScrollPositionParams) => {
    const { element, boundingElement, useWindow } = params;

    if (! isBrowser) {
        return zeroPosition;
    }

    if (useWindow) {
        return { x: window.scrollX, y: window.scrollY };
    }

    const targetPosition = getClientRect(element?.current || document.body);
    const containerPosition = getClientRect(boundingElement?.current);

    if (! targetPosition) {
        return zeroPosition;
    }

    return containerPosition
        ? {
            x: (containerPosition.x || 0) - (targetPosition.x || 0),
            y: (containerPosition.y || 0) - (targetPosition.y || 0),
        }
        : { x: targetPosition.left, y: targetPosition.top };
};

/**
 * React hook that returns the browser viewport X and Y scroll position.
 * @param {IUseScrollPosition} params - object represents parameters.
 * @see {@link https://github.com/n8tb1t/use-scroll-position}
 * @example
 *  useScrollPosition(({ prevPos, currPos }) => {
 *   console.log(currPos.x)
 *   console.log(currPos.y)
 *  })
 */
export const useScrollPosition = (params: IUseScrollPosition): void => {
    const { effect, boundingElement, deps, element, useWindow, wait } = params;
    const position = useRef(getScrollPosition({ useWindow, boundingElement }));

    let throttleTimeout: number | null = null;

    const callBack = () => {
        const currPos = getScrollPosition({ element, useWindow, boundingElement });

        effect({
            atBottom: (window.innerHeight + window.scrollY) >= document.body.offsetHeight,
            currPos,
            prevPos: position.current,
        });
        position.current = currPos;
        throttleTimeout = null;
    };

    useIsomorphicLayoutEffect(() => {
        if (! isBrowser) {
            // eslint-disable-next-line no-undefined
            return undefined;
        }

        const handleScroll = () => {
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = window.setTimeout(callBack, wait);
                }
            }
            else {
                callBack();
            }
        };

        if (boundingElement) {
            boundingElement.current?.addEventListener('scroll', handleScroll, { passive: true });
        }
        else {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            if (boundingElement) {
                boundingElement.current?.removeEventListener('scroll', handleScroll);
            }
            else {
                window.removeEventListener('scroll', handleScroll);
            }

            if (throttleTimeout) {
                clearTimeout(throttleTimeout);
            }
        };
    }, deps);
};

useScrollPosition.defaultProps = {
    boundingElement: false,
    deps: [],
    element: false,
    useWindow: false,
    wait: null,
};
