/**
 * Module contains switches color set
 * @module ui/style/theme/switches
 */

import theme from 'styled-theming';

import { colorSet } from '../settings';

export const switchHandleColor = theme.variants('mode', 'variant', {
    primary: {
        dark: colorSet.dark.textColorPrimary,
        light: colorSet.light.headerBackgroundPrimary,
    },
    secondary: {
        dark: colorSet.dark.textColorPrimary,
        light: colorSet.light.textColorPrimary,
    },
});

export const switchFocusColor = theme.variants('mode', 'variant', {
    primary: {
        dark: colorSet.dark.colorPrimary,
        light: colorSet.light.colorPrimary,
    },
    secondary: {
        dark: colorSet.dark.textColorPrimary,
        light: colorSet.light.textColorPrimary,
    },
});

export const switchBackgroundColor = theme.variants('mode', 'variant', {
    primary: {
        dark: colorSet.dark.headerBackgroundSecondary,
        light: colorSet.dark.headerBackgroundSecondary,
    },
    secondary: {
        dark: colorSet.dark.colorSecondary,
        light: colorSet.light.colorSecondary,
    },
});
