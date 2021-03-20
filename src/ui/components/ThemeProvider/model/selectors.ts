/**
 * Module contains selectors related to theme .
 * @module ui/containers/ThemeProvider/model/selectors
 * @author Igor Ivanov
 */
import { createSelector, OutputSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../store/combineReducers';

import { ThemeProviderState } from './index';

/**
 * Selector to the theme domain.
 * @method
 * @param {Object} state - application state.
 * @return {string} theme - application theme selector.
 */
const selectTheme = (state: RootState): ThemeProviderState => state.theme;

/**
 * Select application theme mode.
 * @method
 * @return {Function} creates new theme selector.
 */
const makeSelectTheme = (): OutputSelector<RootState, string, (res: ThemeProviderState) => string> =>
    createSelector(selectTheme, (themeState: ThemeProviderState) => themeState.theme);

export { selectTheme, makeSelectTheme };
