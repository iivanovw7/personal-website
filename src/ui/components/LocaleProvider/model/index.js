/**
 * Module contains reducers related to localization.
 * @module ui/components/LocaleProvider/model
 * @author Igor Ivanov
 */
import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_LOCALE } from './constants';

/**
 * Localized messages.
 * @typedef {object} module:ui/components/LocaleProvider/model~initialState
 * @property {String} locale - current locale.
 */

/**
 * Contains initial state.
 * @type {module:ui/components/LocaleProvider/model~initState}
 */
export const initState = {
    locale: DEFAULT_LOCALE,
};

/**
 *  Combines functions of createAction and createReducer of application.
 *  @return {Object}
 *     application state slice with state reduces.
 */
const localeProvider = createSlice({
    name: 'pw/localeProvider',
    initialState: initState,
    reducers: {
        changeLocale(state, action) {
            state.locale = action.payload;
        },
    },
});

export const { changeLocale } = localeProvider.actions;

export default localeProvider.reducer;
