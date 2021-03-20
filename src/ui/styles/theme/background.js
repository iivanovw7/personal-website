/**
 * Module contains background color set
 * @module ui/style/theme/background
 */
import { transparentize } from 'polished';
import theme from 'styled-theming';

import { colorSet } from '../settings';

const backgroundOpacityRate = 0.8;

export const mainBg = theme('mode', {
    dark: `${colorSet.dark.mainBackgroundPrimary}`,
    light: `${colorSet.light.mainBackgroundPrimary}`,
});

export const topBarBg = theme('mode', {
    dark: `${colorSet.dark.headerBackgroundPrimary}`,
    light: `${colorSet.light.headerBackgroundPrimary}`,
});

export const fadePrimaryBg = theme('mode', {
    dark: transparentize(backgroundOpacityRate, colorSet.dark.colorPrimary),
    light: transparentize(backgroundOpacityRate, colorSet.light.colorPrimary),
});

export const mainBgInverse = theme('mode', {
    light: `${colorSet.dark.mainBackgroundPrimary}`,
    dark: `${colorSet.light.mainBackgroundPrimary}`,
});


//
// export const headerBg = theme('mode', {
//   dark: `${colorSet.dark.headerBackgroundPrimary}`,
//   light: lighten(0.1, colorSet.dark.headerBackgroundPrimary),
// });
//
// export const progressBarColor = theme('mode', {
//   dark: lighten(0.1, colorSet.dark.colorSecondary),
//   light: darken(0.1, colorSet.light.colorSecondary),
// });
