/**
 * Module contains main themed color
 * @module ui/style/theme/colors
 */
import theme from 'styled-theming';

import { colorSet } from '../settings';

const { dark, light } = colorSet;

export const colorPrimary = theme('mode', {
    dark: `${dark.colorPrimary}`,
    light: `${light.colorPrimary}`,
});

export const colorSecondary = theme('mode', {
    dark: `${dark.colorSecondary}`,
    light: `${light.colorSecondary}`,
});
