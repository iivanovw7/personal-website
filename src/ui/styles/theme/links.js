/**
 * Module contains buttons color set
 * @module ui/style/theme/links
 */
import { lighten, transparentize } from 'polished';
import theme from 'styled-theming';

import { colorSet } from '../settings';

const { dark, light } = colorSet;

/* eslint-disable no-magic-numbers */

export const linkColor = theme.variants('mode', 'variant', {
    primary: {
        dark: `${dark.colorPrimary}`,
        light: `${light.colorPrimary}`,
    },
    secondary: {
        dark: `${dark.colorSecondary}`,
        light: `${light.colorSecondary}`,
    },
    alert: {
        dark: `${dark.colorAlert}`,
        light: `${light.colorAlert}`,
    },
});

export const linkColorLighten = theme.variants('mode', 'variant', {
    primary: {
        dark: lighten(0.2, dark.colorPrimary),
        light: lighten(0.2, light.colorPrimary),
    },
    secondary: {
        dark: lighten(0.2, dark.colorSecondary),
        light: lighten(0.2, light.colorSecondary),
    },
    alert: {
        dark: lighten(0.2, dark.colorAlert),
        light: lighten(0.2, light.colorAlert),
    },
});

export const navLinkTextColor = theme.variants('mode', 'variant', {
    primary: {
        light: light.colorPrimary,
        dark: dark.colorPrimary,
    },
    secondary: {
        light: light.textColorPrimary,
        dark: dark.textColorPrimary,
    },
    title: {
        light: light.colorPrimary,
        dark: dark.colorSecondary,
    }
});

export const navLinkTextColorActive = theme.variants('mode', 'variant', {
    primary: {
        light: dark.textColorPrimary,
        dark: dark.textColorPrimary,
    },
    secondary: {
        light: dark.textColorPrimary,
        dark: dark.textColorPrimary,
    },
    title: {
        light: dark.textColorPrimary,
        dark: dark.textColorPrimary,
    }
});

export const navLinkBackgroundHover = theme.variants('mode', 'variant', {
    primary: {
        light: transparentize(0.9, dark.colorPrimary),
        dark: transparentize(0.8, dark.colorPrimary),
    },
    secondary: {
        light: transparentize(0.9, light.textColorPrimary),
        dark: transparentize(0.8, dark.textColorPrimary),
    },
    title: {
        light: transparentize(0.9, light.textColorPrimary),
        dark: transparentize(0.8, dark.textColorPrimary),
    }
});

/* eslint-enable no-magic-numbers */
