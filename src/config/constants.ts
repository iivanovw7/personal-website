/**
 * Module contains main application constants.
 * @module config/constants
 */

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

export type HttpMethodMap = {
    GET: string;
    POST: string;
    HEAD: string;
    DELETE: string;
    PUT: string;
    PATCH: string;
};

/**
 * Http methods map.
 * @readonly
 * @type {{HEAD: string, DELETE: string, POST: string, GET: string, PUT: string, PATCH: string}}
 */
export const httpMethodMap = {
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

export type LogModeMap = {
    ERROR: string;
    DEBUG: string;
    OFF: string;
};

/**
 * Logger mode map
 * @readonly
 * @type {{ERROR: string, DEBUG: string, OFF: string}}
 */
export const logModeMap = {
    LOGGER_ERROR: 'error',
    LOGGER_DEBUG: 'debug',
    LOGGER_OFF: 'off',
};

// export type LogModeMapKeys = keyof LogModeMap;

/**
 * Log messages map.
 * @readonly
 * @type {{SUCCESS: symbol, ERROR: symbol, INFO: symbol, DEBUG: symbol, WARNING: symbol}}
 */
export const logLevelMap = {
    SUCCESS: Symbol('success'),
    INFO: Symbol('info'),
    DEBUG: Symbol('debug'),
    ERROR: Symbol('error'),
    WARNING: Symbol('warning'),
};
