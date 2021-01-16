/**
 * Module contains text color set
 * @module ui/style/theme/typography
 */
import theme from 'styled-theming';

import { colorSet } from '../settings';

export const lightText = theme('mode', {
    dark: `${colorSet.dark.textColorPrimary}`,
    light: `${colorSet.dark.textColorPrimary}`,
});

export const darkText = theme('mode', {
    dark: `${colorSet.light.textColorPrimary}`,
    light: `${colorSet.light.textColorPrimary}`,
});

export const textColor = theme('mode', {
    dark: `${colorSet.dark.textColorPrimary}`,
    light: `${colorSet.light.textColorPrimary}`,
});

export const textColorInverse = theme('mode', {
    light: `${colorSet.dark.textColorPrimary}`,
    dark: `${colorSet.light.textColorPrimary}`,
});
