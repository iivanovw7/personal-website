/**
 * Module contains page global loader component.
 * @module ui/elements/Loader
 */
import { linearGradient } from 'polished';
import styled, { CSSProp } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { loaderAnimation } from '../../styles/keyframes';
import { zIndex } from '../../styles/mixins';
import { colorSet, timeouts } from '../../styles/settings';

const { duration, delay } = timeouts;
const { first, second, third } = colorSet.gradients;
const defaultHeight = 0.125;

type TLoaderProps = PartialAndNullable<{
    /** Flag determines if loader should be shown or hidden. */
    hide?: boolean;
    /** Loader height in `rem`. */
    height?: number;
    /** Additional component styling */
    styling?: CSSProp;
}>;

/* eslint-disable @typescript-eslint/indent */

const Loader = styled.div<TLoaderProps>`
    background-color: #cfd6fa;
    height: ${ (props) => props.height || defaultHeight }rem;
    left: 0;
    ${ (props) => props.styling };
    ${ (props) => props.hide && `
        display: none;
    ` };
    overflow: hidden;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${ String(zIndex.Loader) };

    &::after,
    &::before {
        animation: ${ loaderAnimation } ${ duration }s infinite cubic-bezier(0.4, 0, 0.2, 1);
        content: '';
        height: 100%;
        ${ linearGradient({
            colorStops: [`${ String(first) } 0%`, `${ String(second) } 50%`, `${ String(third) } 95%`],
            toDirection: 'to right',
            fallback: first,
        }) };
        position: absolute;
        right: 100%;
        top: 0;
        width: 33.33%;
    }

    &::after {
        animation-delay: ${ delay }s;
    }
`;

/* eslint-enable @typescript-eslint/indent */

export default Loader;
