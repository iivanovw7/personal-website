/**
 * Module contains selectors related to theme .
 * @module ui/containers/ThemeProvider/model/selectors
 * @author Igor Ivanov
 */
import { createSelector } from 'reselect';

import { initState, ThemeProviderState } from './index';

/**
 * Selector to the theme domain.
 * @method
 * @param {Object} state - application state.
 * @return {string} theme - application theme selector.
 */
const selectTheme = (state): ThemeProviderState => state.theme || initState;

/**
 * Select application theme mode.
 * @method
 * @return {Function} creates new theme selector.
 */
const makeSelectTheme = () =>
    createSelector(selectTheme, (themeState: ThemeProviderState) => themeState.theme);

export { selectTheme, makeSelectTheme };
