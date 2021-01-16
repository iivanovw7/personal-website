/**
 * Module used to create combine reducers.
 * @module ui/store/combineReducers.
 */
import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import throttle from 'lodash.throttle';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import createReducer from './combineReducers';
import { loadState, saveState } from './localStorage';

/**
 * Function creates base application store and applies middlewares
 * @param {Object} initialState - initial application state.
 * @param {Object} history - object contains application router and history data.
 * @return {any} returns application store object
 */
export default function configureStore(initialState, history) {
    let composeEnhancers = compose;
    let reduxSagaMonitorOptions = {};
    const persistedState = loadState();

    // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
    // eslint-disable-next-line no-undef
    if (CONFIG !== 'production' && typeof window === 'object') {
        /* eslint-disable no-underscore-dangle */
        // @ts-ignore
        composeEnhancers = composeWithDevTools;
        // NOTE: Uncomment the code below to restore support for Redux Saga
        // Dev Tools once it supports redux-saga version 1.x.x
        // @ts-ignore
        if (window.__SAGA_MONITOR_EXTENSION__)
            reduxSagaMonitorOptions = {
                // Does not work with latest redux-saga
                // https://github.com/abettadapur/redux-saga-devtools-extension/issues/6
                // sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
            };
        /* eslint-enable */
    }

    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [sagaMiddleware, routerMiddleware(history)];

    const enhancers = [applyMiddleware(...middlewares)];

    const store = createStore(
        createReducer(),
        // @ts-ignore
        { ...initialState, ...persistedState },
        composeEnhancers(...enhancers),
    );

    // Extensions
    // @ts-ignore
    store.runSaga = sagaMiddleware.run;

    // Refreshing persisted state
    store.subscribe(
        throttle(() => {
            saveState({
                language: store.getState().language,
                theme: store.getState().theme,
            });
        }, 1000),
    );

    // Make reducers hot reloadable, see http://mxs.is/googmo
    // @ts-ignore
    if (module.hot) {
        // @ts-ignore
        module.hot.accept('./combineReducers', () => {
            store.replaceReducer(createReducer());
        });
    }

    return store;
}
