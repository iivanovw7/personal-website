/**
 * Module contains inputs color set
 * @module ui/style/theme/inputs
 */
import { darken, lighten } from 'polished';
import theme from 'styled-theming';

import { colorSet } from '../settings';

/* eslint-disable no-magic-numbers */

export const inputBackground = theme.variants('mode', 'variant', {
    primary: {
        light: lighten(0.15, colorSet.dark.inputBackgroundPrimary),
        dark: darken(0.04, colorSet.dark.inputBackgroundPrimary),
    },
    secondary: {
        light: colorSet.dark.inputBackgroundPrimary,
        dark: colorSet.dark.inputBackgroundPrimary,
    },
    disabled: {
        light: colorSet.baseColors.grey700,
        dark: colorSet.baseColors.grey700,
    }
});

export const inputBorderColor = theme.variants('mode', 'variant', {
    primary: {
        light: colorSet.light.textColorPrimary,
        dark: colorSet.dark.textColorPrimary,
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
