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
        light: lighten(0.15, colorSet.dark.inputColorPrimary),
        dark: darken(0.04, colorSet.dark.inputColorPrimary),
    },
    secondary: {
        light: colorSet.dark.textColorPrimary,
        dark: colorSet.dark.textColorPrimary,
    },
});

/* eslint-enable no-magic-numbers */
