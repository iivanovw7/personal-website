/**
 * Module used to create combine reducers.
 * @module ui/store/combineReducers.
 */
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import languageProviderReducer from '../components/LocaleProvider/model';
import themeProviderReducer from '../components/ThemeProvider/model';
import appReducer from '../containers/App/model';
import postsReducer from '../containers/Posts/model';
import appHistory from '../routes/history';

/**
 * Merging reducers.
 * @return {function} createReducer - returns function used for store combining.
 */
export default function createReducer() { // eslint-disable-line @typescript-eslint/explicit-module-boundary-types
    return combineReducers({
        app: appReducer,
        language: languageProviderReducer,
        theme: themeProviderReducer,
        router: connectRouter(appHistory),
        posts: postsReducer
    });
}

export type RootState = ReturnType<ReturnType<typeof createReducer>>;
