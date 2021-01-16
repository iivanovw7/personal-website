/**
 * Module contains constants related to theming.
 * @module ui/components/ThemeProvider/model/constants
 * @author Igor Ivanov
 */

import { DARK_THEME, LIGHT_THEME } from '../../../../config/constants';
import envProperties from '../../../../utils/env';

// prettier-ignore
/**
 * Default locale.
 * @constant {string}
 */
export const DEFAULT_THEME = envProperties.isDarkTheme // eslint-disable-line import/prefer-default-export
    ? DARK_THEME
    : LIGHT_THEME;
