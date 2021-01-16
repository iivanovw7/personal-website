/**
 * Module contains reducers related to all application.
 * @module ui/containers/App/model
 * @author Igor Ivanov
 */
import { createSlice } from '@reduxjs/toolkit';

/**
 * Contains initial state.
 * @type {module:ui/containers/App/model~initState}
 */
export const initState = {
    wait: 0,
};

/* eslint-disable no-param-reassign, no-plusplus */

/**
 *  Combines functions of createAction and createReducer of application.
 *  @return {Object}
 *     application state slice with state reduces.
 */
const appSlice = createSlice({
    name: 'pw/app',
    initialState: initState,
    reducers: {
        startWait(state) {
            state.wait++;
        },
        stopWait(state) {
            if (state.wait > 0) {
                state.wait--;
            }
        },
        completeWait(state) {
            if (state.wait > 0) {
                state.wait = 0;
            }
        },
    },
});

export const { startWait, stopWait, completeWait } = appSlice.actions;

export default appSlice.reducer;

/* eslint-enable no-param-reassign, no-plusplus */
