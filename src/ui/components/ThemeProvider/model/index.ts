/**
 * Module contains reducers related to theming
 * @module ui/components/ThemeProvider/model
 * @author Igor Ivanov
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
export type Theme = ThemeProviderState['theme'];
export type ChangeTheme = {
    type: string,
    payload: Theme
};

/**
 *  Combines functions of createAction and createReducer of application.
 *  @return {Object}
 *     application state slice with state reduces.
 */
const themeProvider = createSlice({
    name: 'pw/themeProvider',
    initialState: initState,
    reducers: {
        changeTheme(state, action: PayloadAction<Theme>) {
            state.theme = action.payload;
        },
    },
});

export const { changeTheme } = themeProvider.actions;

export default themeProvider.reducer;
