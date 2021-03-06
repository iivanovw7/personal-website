/**
 * Module contains borders color set
 * @module ui/style/theme/borders
 */
import { darken, lighten } from 'polished';
import theme from 'styled-theming';

import { colorSet } from '../settings';

const { dark, light } = colorSet;

/* eslint-disable no-magic-numbers */

export const iconBorderColor = theme('mode', {
    dark: darken(0.1, dark.mainBackgroundPrimary),
    light: darken(0.8, light.mainBackgroundPrimary),
});

export const topBarBorderColor = theme('mode', {
    dark: lighten(0.05, dark.headerBackgroundSecondary),
    light: lighten(0.4, dark.headerBackgroundSecondary),
});

/* eslint-enable no-magic-numbers */

// export const focusOutlineColor = theme.variants('mode', 'variant', {
//     primary: {
//         light: transparentize(0.1, colorSet.light.colorPrimary),
//         dark: transparentize(0.1, colorSet.dark.colorPrimary),
//     },
//     secondary: {
//         light: transparentize(0.1, colorSet.light.colorSecondary),
//         dark: transparentize(0.1, colorSet.dark.colorSecondary),
//     },
// });
