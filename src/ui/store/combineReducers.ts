/**
 * Module used to create combine reducers.
 * @module ui/store/combineReducers.
 */
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import languageProviderReducer from '../components/LocaleProvider/model';
import themeProviderReducer from '../components/ThemeProvider/model';
import appReducer from '../containers/App/model';
import history from '../routes/history';

/**
 * Merging reducers.
 * @return {function} createReducer - returns function used for store combining.
 */
export default function createReducer() {
    return combineReducers({
        app: appReducer,
        language: languageProviderReducer,
        theme: themeProviderReducer,
        router: connectRouter(history),
    });
}
