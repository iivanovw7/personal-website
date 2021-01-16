/**
 * Module contains main themed color
 * @module ui/style/theme/colors
 */
import theme from 'styled-theming';

import { colorSet } from '../settings';

// eslint-disable-next-line
export const colorPrimary = theme('mode', {
    dark: `${colorSet.dark.colorPrimary}`,
    light: `${colorSet.light.colorPrimary}`,
});
