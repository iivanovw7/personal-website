/**
 * Module contains logger util.
 * @module utils/logger
 */
import config from '../config';
import { logLevelMap, logModeMap } from '../config/constants';

import { formatLoggerDate } from './date';

const { ERROR, DEBUG, SUCCESS, INFO, WARNING } = logLevelMap;
const { LOGGER_OFF } = logModeMap;

/**
 * Send logger message of appropriate type
 * @param {string} type
 *    message type
 * @param {string} color (rgba)
 *    message color
 * @param {string} message text
 *    message content
 * @return {void}
 */
function sendMessage(type: string, color: string, message: string): void {
    const date = new Date();

    // eslint-disable-next-line no-console
    console.log(
        `%c[${type}]%c ${message}\n%c[Timestamp]%c ${formatLoggerDate(date)}`,
        `color: ${color}`,
        'color: inherit',
        `color: ${color}`,
        'color: inherit',
    );
}

/* eslint-disable valid-jsdoc */

/**
 * Setup application Logger instance in appropriate mode
 * @param {object} options
 *    logger options
 * @constructor
 */
const Logger = function Logger(options) {
    // @ts-ignore
    this.mode = options.logLevel || LOGGER_OFF;
    // @ts-ignore
    if (this.mode !== LOGGER_OFF) {
        // @ts-ignore
        sendMessage('Info', 'rgb(49,196,251)', `Logger is in [${this.mode}] mode.`);
    }
};

/* eslint-enable valid-jsdoc */

/**
 * Creates logger message of appropriate type, allows debug messages in debug mode
 *
 * @param {Object} args
 *    arguments
 * @param {symbol} args.type
 *    constant, message sender type
 * @param {string} args.message
 *    logger message
 *
 * @return {null|void}
 *    logger message
 */
Logger.prototype.send = function send(args): void | null {
    const { type, message } = args;
    const { mode } = this;

    if (mode === LOGGER_OFF) {
        return null;
    }

    // prettier-ignore
    switch (type) {
        case ERROR:
            return sendMessage('Error', 'rgb(255, 105, 100)', message);
        case SUCCESS:
            return sendMessage('Success', 'rgb(102,255,69)', message);
        case DEBUG:
            return mode === DEBUG
                ? sendMessage('Debug', 'rgb(243,25,255)', message)
                : null;
        case WARNING:
            return mode === DEBUG
                ? sendMessage('Warning', 'rgb(255, 220, 93)', message)
                : null;
        case INFO:
            return mode === DEBUG
                ? sendMessage('Info', 'rgb(49,196,251)', message)
                : null;
        default:
            return null;
    }
};

// Ensure Singleton has one instance
const instance = new Logger({ logLevel: config.logLevel });
Object.freeze(instance);

export default instance;
export { sendMessage, Logger as InitLogger };
