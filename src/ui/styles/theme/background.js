/**
 * Module contains background color set
 * @module ui/style/theme/background
 */
import { transparentize } from 'polished';
import theme from 'styled-theming';

import { colorSet, opacity } from '../settings';

const { dark, light } = colorSet;
const { mainBackground } = opacity;

export const mainBg = theme('mode', {
    dark: `${dark.mainBackgroundPrimary}`,
    light: `${light.mainBackgroundPrimary}`,
});

export const topBarBg = theme('mode', {
    dark: `${dark.headerBackgroundPrimary}`,
    light: `${light.headerBackgroundPrimary}`,
});

export const fadePrimaryBg = theme('mode', {
    dark: transparentize(mainBackground, dark.colorPrimary),
    light: `${light.headerBackgroundPrimary}`,
});

export const mainBgInverse = theme('mode', {
    light: `${dark.mainBackgroundPrimary}`,
    dark: `${light.mainBackgroundPrimary}`,
});

