/**
 * Module contains layout effect selector depending on window object.
 * @module utils/hooks/useIsomorphicLayoutEffect
 */
import { useLayoutEffect, useEffect } from 'react';

import envProps from '../env';

const { isBrowser } = envProps;

export const useIsomorphicLayoutEffect = isBrowser
    ? useLayoutEffect
    : useEffect;
