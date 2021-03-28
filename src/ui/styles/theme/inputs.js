/**
 * Module contains inputs color set
 * @module ui/style/theme/inputs
 */
import { darken, lighten } from 'polished';
import theme from 'styled-theming';

import { colorSet } from '../settings';

const { dark, light, baseColors } = colorSet;

/* eslint-disable no-magic-numbers */

export const inputBackground = theme.variants('mode', 'variant', {
    primary: {
        light: lighten(0.15, dark.inputBackgroundPrimary),
        dark: darken(0.04, dark.inputBackgroundPrimary),
    },
    secondary: {
        light: dark.inputBackgroundPrimary,
        dark: dark.inputBackgroundPrimary,
    },
    disabled: {
        light: baseColors.grey700,
        dark: baseColors.grey700,
    }
});

export const inputBorderColor = theme.variants('mode', 'variant', {
    primary: {
        light: light.textColorPrimary,
        dark: dark.textColorPrimary,
    },
    secondary: {
        light: light.colorSecondary,
        dark: dark.colorSecondary,
    },
    disabled: {
        light: baseColors.grey700,
        dark: baseColors.grey700,
    }
});

export const inputBorderFocusColor = theme.variants('mode', 'variant', {
    primary: {
        light: colorSet.light.colorPrimary,
        dark: colorSet.dark.colorPrimary,
    },
    secondary: {
        light: colorSet.light.colorSecondary,
        dark: colorSet.dark.colorSecondary,
    },
    disabled: {
        light: colorSet.baseColors.grey700,
        dark: colorSet.baseColors.grey700,
    }
});

export const inputText = theme.variants('mode', 'variant', {
    primary: {
        light: lighten(0.15, colorSet.dark.inputColorPrimary),
        dark: darken(0.04, colorSet.dark.inputColorPrimary),
    },
    secondary: {
        light: colorSet.dark.inputColorPrimary,
        dark: colorSet.dark.inputColorPrimary,
    },
});

export const inputValidation = theme.variants('mode', 'variant', {
    primary: {
        light: colorSet.dark.colorAlert,
        dark: colorSet.dark.colorAlert,
    },
    secondary: {
        light: colorSet.dark.colorAlert,
        dark: colorSet.dark.colorAlert,
    },
});

/* eslint-enable no-magic-numbers */
