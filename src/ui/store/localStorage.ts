/**
 * Module contains functions operation with local storage.
 * @module ui/store/localStorage.
 * @author Igor Ivanov
 */
import { logLevelMap } from '../../config/constants';
import Logger from '../../log';

import { RootState } from './combineReducers';

const { ERROR } = logLevelMap;
const logger = Logger.getInstance();

/**
 * Loads sate object from local storage, if no object has been found returns undefined.
 * @return {any|undefined} state new state object if it exists.
 */
export const loadState = (): RootState | undefined => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {

            // eslint-disable-next-line no-undefined
            return undefined;
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return JSON.parse(serializedState);
    }
    catch (err: unknown) {
        logger.send({
            type: ERROR,
            message: `Error during state load: ${err as string}`,
        });

        // eslint-disable-next-line no-undefined
        return undefined;
    }
};

/**
 * Serializes and saves state object in local storage.
 * @param {Object} state - application state object.
 */
export const saveState = (state: Partial<RootState>): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (err: unknown) {
        logger.send({
            type: ERROR,
            message: `Error during state save: ${err as string}`,
        });
    }
};
