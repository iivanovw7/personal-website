/**
 * Module contains reducers related to theming
 * @module ui/components/ThemeProvider/model
 * @author Igor Ivanov
 */

import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_THEME } from './constants';

/**
 * Theme reducer initialState.
 * @typedef {object} module:components/ThemeProvider/model~initialState
 * @property {String} mode - current theme mode.
 */

/**
 * Contains initial state.
 * @type {module:ui/components/ThemeProvider/model~initialState}
 */
export const initState = {
    theme: DEFAULT_THEME,
};

export type ThemeProviderState = typeof initState;

/**
 *  Combines functions of createAction and createReducer of application.
 *  @return {Object}
 *     application state slice with state reduces.
 */
const themeProvider = createSlice({
    name: 'pw/themeProvider',
    initialState: initState,
    reducers: {
        changeTheme(state, action) {
            // eslint-disable-next-line no-param-reassign
            state.theme = action.payload;
        },
    },
});

export const { changeTheme } = themeProvider.actions;

export default themeProvider.reducer;
