/**
 * Module contains functions operation with local storage.
 * @module ui/store/localStorage.
 * @author Igor Ivanov
 */
import { logLevelMap } from '../../config/constants';
import Logger from '../../utils/logger';

const { ERROR } = logLevelMap;

/**
 * Loads sate object from local storage, if no object has been found returns undefined.
 * @return {any|undefined} state new state object if it exists.
 */
export const loadState = (): void | undefined => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        Logger.send({
            type: ERROR,
            message: `Error during state load: ${err}`,
        });

        return undefined;
    }
};

/**
 * Serializes and saves state object in local storage.
 * @param {Object} state - application state object.
 */
export const saveState = (state): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        Logger.send({
            type: ERROR,
            message: `Error during state save: ${err}`,
        });
    }
};
