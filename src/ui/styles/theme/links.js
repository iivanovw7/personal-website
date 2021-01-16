/**
 * Module contains buttons color set
 * @module ui/style/theme/links
 */
import { lighten, transparentize } from 'polished';
import theme from 'styled-theming';

import { colorSet } from '../settings';

export const linkColor = theme.variants('mode', 'variant', {
    primary: {
        dark: `${colorSet.dark.colorPrimary}`,
        light: `${colorSet.light.colorPrimary}`,
    },
    secondary: {
        dark: `${colorSet.dark.colorSecondary}`,
        light: `${colorSet.light.colorSecondary}`,
    },
    alert: {
        dark: `${colorSet.dark.colorAlert}`,
        light: `${colorSet.light.colorAlert}`,
    },
});

export const linkColorLighten = theme.variants('mode', 'variant', {
    primary: {
        dark: lighten(0.2, colorSet.dark.colorPrimary),
        light: lighten(0.2, colorSet.light.colorPrimary),
    },
    secondary: {
        dark: lighten(0.2, colorSet.dark.colorSecondary),
        light: lighten(0.2, colorSet.light.colorSecondary),
    },
    alert: {
        dark: lighten(0.2, colorSet.dark.colorAlert),
        light: lighten(0.2, colorSet.light.colorAlert),
    },
});

export const navLinkTextColor = theme.variants('mode', 'variant', {
    primary: {
        light: colorSet.light.colorPrimary,
        dark: colorSet.dark.colorPrimary,
    },
    secondary: {
        light: colorSet.dark.textColorPrimary,
        dark: colorSet.dark.textColorPrimary,
    },
});

export const navLinkTextColorActive = theme.variants('mode', 'variant', {
    primary: {
        light: colorSet.dark.textColorPrimary,
        dark: colorSet.dark.textColorPrimary,
    },
    secondary: {
        light: colorSet.dark.textColorPrimary,
        dark: colorSet.dark.textColorPrimary,
    },
});

export const navLinkBackgroundHover = theme.variants('mode', 'variant', {
    primary: {
        light: transparentize(0.9, colorSet.dark.colorPrimary),
        dark: transparentize(0.8, colorSet.dark.colorPrimary),
    },
    secondary: {
        light: transparentize(0.9, colorSet.dark.textColorPrimary),
        dark: transparentize(0.8, colorSet.dark.textColorPrimary),
    },
});
