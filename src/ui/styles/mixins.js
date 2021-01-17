/**
 * Module contains style mixins.
 * @module ui/style/mixins
 */
import { mix } from 'polished';
import { fromPairs } from 'ramda';
import { css } from 'styled-components';

import { keyframesFadeInTop } from './keyframes';
import { base, breakpoints, colorSet } from './settings';

/**
 * Media mixin function.
 * @example
 *  // background black from breakpoint `sm`.
 *  export const Component = styled.div`
 *    background-color: red;
 *
 *    ${respondToMedia.sm`
 *      background-color: black;
 *    `}
 *  `;
 * @return {*} respondToMedia functions creates media query
 */
export const respondToMedia = Object.keys(breakpoints).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
        @media (min-width: ${breakpoints[label]}px) {
            ${css(...args)};
        }
    `;
    return accumulator;
}, {});

// prettier-ignore
/**
 * Verifies if parameter exists in breakpoints as key prop, if not - returns default `sm` key.
 * @param {string} [value = 'sm'] breakpoint key to be checked.
 * @return {string} breakpoint key
 */
export const mediaKey = (value = "sm") => (Object.keys(breakpoints).includes(value)
    ? value
    : "sm"
);

/**
 * Creates set of zIndex values out of incoming list of element names.
 * @see {@link module:config/styles~base}
 * @param {Array.<string>} labels list of elements
 * @return {Object} set of zIndexes to be used inside styled component.
 */
function assignIndexes(labels) {
    return fromPairs(labels.map((label, index) => [label, base.zIndex + index]));
}

/**
 * Result of `assignIndexes` set of indexes.
 * @example
 *  // z-index: 101;
 *  base.zIndex = 100;
 *  base.zIndexes = ['header', 'modal']
 *
 *  const Modal = styled.div`
 *    z-index: ${zIndex.modal};
 *  `;
 */
export const zIndex = assignIndexes(base.zIndexes);

export const styleMixins = {
    vertAlignFlex: (align = 'center') => css`
        align-items: ${align};
        display: flex;
    `,
    focusOutline: (color, colorActive = color, width = '0.154rem', style = 'solid') => css`
        outline: none;
        transition: outline 0.4s;

        &:focus {
            outline: ${width} ${style} ${color};
        }
        &:focus:hover {
            outline: ${width} ${style} ${colorActive};
        }
    `,
    focusBoxShadow: (
        border = '2px',
        borderColor = 'transparent',
        borderFocus = colorSet.textColorPrimary,
    ) => css`
        box-shadow: 0 0 0 ${border} ${borderColor};
        transition: box-shadow 0.4s;

        &:focus {
            box-shadow: 0 0 0 ${border} ${borderFocus};
            outline: none;
        }
    `,
    ripples: () => css`
        overflow: hidden;
        position: relative;
        transform: translate3d(0, 0, 0);
        z-index: ${zIndex.Ripples});

        &:after {
            background-image: radial-gradient(circle, #ffffff 10%, transparent 10.01%);
            background-position: 50%;
            background-repeat: no-repeat;
            content: '';
            display: block;
            height: 100%;
            left: 0;
            opacity: 0;
            pointer-events: none;
            position: absolute;
            top: 0;
            transform: scale(10, 10);
            transition: transform 0.5s, opacity 1s;
            width: 100%;
        }

        &:active:after {
            opacity: 0.2;
            transform: scale(0, 0);
            transition: 0s;
        }
    `,
    /**
     * Adds custom font properties.
     * @param {number} [size = 1] font size in `rem`.
     * @param {number} [lineHeight = 1] line height size in `rem`.
     * @param {number} [fontWeight = 300] font weight.
     * @return {Array} css properties
     */
    fontSize: (size = 1, lineHeight = 1, fontWeight = 300) => css`
        font-size: ${size}rem;
        font-weight: ${fontWeight};
        line-height: ${lineHeight}rem;
    `,
    fadeInTop: () => css`
        animation: ${keyframesFadeInTop} ease 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        transform-origin: 50% 50%;
    `,
    /**
     * Scroll bar size and color customization.
     *
     * @param {number} size - scrollbar size in px.
     * @param {string | function} foregroundColor - string foreground color representation.
     * @param {string | function} [backgroundColor] - string background color representation.
     * @return {Array} css properties
     */
    scrollbars: (size, foregroundColor, backgroundColor = mix('0.3', '#1e2227', '#fffaf0')) => css`
        // For Internet Explorer
        & {
            scrollbar-face-color: ${foregroundColor};
            scrollbar-track-color: ${backgroundColor};
        }
        // For Google Chrome
        &::-webkit-scrollbar {
            height: ${size}px;
            width: ${size}px;
        }

        &::-webkit-scrollbar-thumb {
            background: ${foregroundColor};
        }

        &::-webkit-scrollbar-track {
            background: ${backgroundColor};
        }

        scrollbar-color: ${foregroundColor} ${backgroundColor};
        scrollbar-width: thin;
    `,
    /**
     * Sets elements max width properties.
     * @param {string} [maxWidth = '2rem'] - width limit in rem.
     * @return {Array} css properties
     */
    fluidWidth: (maxWidth = '2rem') => css`
        max-width: ${maxWidth};
        width: 100%;
    `,
    /**
     * Creates a shape of the cross with custom size and color parameters.
     * @param {string} color - color string.
     * @param {number} [size = 1] in `rem`.
     * @param {number} [border = 0.1] width in `rem`.
     * @return {Array} css properties
     */
    cross: (color, size = 1, border = 0.1) => css`
        height: ${size}rem;
        width: ${size}rem;

        &::after {
            border-left: ${border}rem solid ${color};
            content: '';
            height: ${size}rem;
            left: calc(${size}rem / 2.5);
            position: absolute;
            transform: rotate(45deg);
        }

        &::before {
            border-left: ${border}rem solid ${color};
            content: '';
            height: ${size}rem;
            left: calc(${size}rem / 2.5);
            position: absolute;
            transform: rotate(-45deg);
        }
    `,
};
