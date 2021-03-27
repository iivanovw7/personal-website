/**
 * Module contains switches color set
 * @module ui/style/theme/switches
 */

import theme from 'styled-theming';

import { colorSet } from '../settings';

const { dark, light } = colorSet;

export const switchHandleColor = theme.variants('mode', 'variant', {
    primary: {
        dark: dark.textColorPrimary,
        light: light.headerBackgroundPrimary,
    },
    secondary: {
        dark: dark.textColorPrimary,
        light: light.textColorPrimary,
    },
});

export const switchFocusColor = theme.variants('mode', 'variant', {
    primary: {
        dark: dark.colorPrimary,
        light: light.colorPrimary,
    },
    secondary: {
        dark: dark.textColorPrimary,
        light: light.textColorPrimary,
    },
});

export const switchBackgroundColor = theme.variants('mode', 'variant', {
    primary: {
        dark: dark.headerBackgroundSecondary,
        light: dark.headerBackgroundSecondary,
    },
    secondary: {
        dark: dark.colorSecondary,
        light: light.colorSecondary,
    },
});
