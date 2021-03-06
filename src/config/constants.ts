/**
 * Module contains main application constants.
 * @module config/constants
 */

import { LogLevelMap, LogModeMap, HttpMethodMap } from '../types/common';

/**
 * Dark UI theme setting.
 * @type {string}
 */
export const LIGHT_THEME: Readonly<string> = 'light';

/**
 * Light UI theme setting.
 * @type {string}
 */
export const DARK_THEME: Readonly<string> = 'dark';

/**
 * Http methods map.
 * @readonly
 * @type {{HEAD: string, DELETE: string, POST: string, GET: string, PUT: string, PATCH: string}}
 */
export const httpMethodMap: Readonly<HttpMethodMap> = {
    GET: 'GET',
    POST: 'POST',
    HEAD: 'HEAD',
    DELETE: 'DELETE',
    PUT: 'PUT',
    PATCH: 'PATCH',
};

// export type HttpMethodMapKeys = keyof HttpMethodMap;

export const ACTION_SELECT_APPLICATION: Readonly<string> = 'ACTION_SELECT_APPLICATION';
export const ACTION_SELECT_LOG: Readonly<string> = 'ACTION_SELECT_LOG';
export const ACTION_REMOVE_MESSAGES: Readonly<string> = 'ACTION_REMOVE_MESSAGES';
export const ACTION_ADD_MESSAGES: Readonly<string> = 'ACTION_ADD_MESSAGES';

/**
 * Logger mode map
 * @readonly
 * @type {{ERROR: string, DEBUG: string, OFF: string}}
 */
export const logModeMap: Readonly<LogModeMap> = {
    LOGGER_ERROR: 'error',
    LOGGER_DEBUG: 'debug',
    LOGGER_OFF: 'off',
};

/**
 * Log messages map.
 * @readonly
 * @type {{SUCCESS: string, ERROR: string, INFO: string, DEBUG: string, WARNING: string}}
 */
export const logLevelMap: Readonly<LogLevelMap> = {
    SUCCESS: 'success',
    INFO: 'info',
    DEBUG: 'debug',
    ERROR: 'error',
    WARNING: 'warning',
};

/**
 * Contains possible validation config keys.
 */
export enum VALIDATION {
    search = 'search'
}
