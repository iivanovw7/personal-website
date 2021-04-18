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
    /** Controls application wait screen. */
    wait: 0,
    /** Controls top page loading bar. */
    loading: false
};

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
        setLoader(state, action) {
            state.loading = action.payload;
        }
    }
});

export const { startWait, stopWait, completeWait, setLoader } = appSlice.actions;

export default appSlice.reducer;
