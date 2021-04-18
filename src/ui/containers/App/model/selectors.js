/**
 * Module contains app selectors.
 * @module ui/containers/App/model/selectors
 * @author Igor Ivanov
 */
import { createSelector } from '@reduxjs/toolkit';

import { initState } from './index';

const selectApp = (state) => state.app || initState;

const selectRouter = (state) => state.router;

/**
 * Select the app state.
 * @method
 * @return {Function} creates new locale selector.
 */
const makeSelectApp = createSelector(selectApp, (appState) => {
    return {
        wait: appState.wait > 0,
        loading: appState.loading
    };
});

const selectLocation = (state) => selectRouter(state).location;

export { makeSelectApp, selectLocation };
