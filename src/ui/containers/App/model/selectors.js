/**
 * Module contains app selectors.
 * @module ui/containers/App/model/selectors
 * @author Igor Ivanov
 */
import { createSelector } from 'reselect';

import { initState } from './index';

const selectApp = (state) => state.app || initState;

/**
 * Select the app state.
 * @method
 * @return {Function} creates new locale selector.
 */
const makeSelectApp = createSelector(selectApp, (appState) => ({
    wait: appState.wait > 0,
}));

// eslint-disable-next-line import/prefer-default-export
export { makeSelectApp };
