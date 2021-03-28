/**
 * Module contains text color set
 * @module ui/style/theme/typography
 */
import theme from 'styled-theming';

import { colorSet } from '../settings';

const { dark, light } = colorSet;

export const lightText = theme('mode', {
    dark: `${dark.textColorPrimary}`,
    light: `${dark.textColorPrimary}`,
});

export const darkText = theme('mode', {
    dark: `${light.textColorPrimary}`,
    light: `${light.textColorPrimary}`,
});

export const textColor = theme('mode', {
    dark: `${dark.textColorPrimary}`,
    light: `${light.textColorPrimary}`,
});

export const textColorInverse = theme('mode', {
    light: `${dark.textColorPrimary}`,
    dark: `${light.textColorPrimary}`,
});

export const headerColor = theme.variants('mode', 'variant', {
    primary: {
        dark: dark.colorPrimary,
        light: light.colorPrimary,
    },
    secondary: {
        dark: dark.colorSecondary,
        light: light.colorSecondary,
    },
});

export const titleColor = theme('mode', {
    light: `${light.colorPrimary}`,
    dark: `${dark.colorSecondary}`,
});
