/**
 * Module contains constants related to theming.
 * @module ui/components/ThemeProvider/model/constants
 * @author Igor Ivanov
 */

import { DARK_THEME, LIGHT_THEME } from '../../../../config/constants';
import envProperties from '../../../../utils/env';

/**
 * Default locale.
 * @constant {string}
 */
export const DEFAULT_THEME = envProperties.isDarkTheme
    ? DARK_THEME
    : LIGHT_THEME;
