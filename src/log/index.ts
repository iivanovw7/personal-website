/**
 * Module contains custom logger.
 * @module log
 */
import config from '../config';
import { logLevelMap, logModeMap } from '../config/constants';
import { LogModeMap, LogLevelMap } from '../types/common';
import { formatLoggerDate } from '../utils/date';

const { ERROR, DEBUG, SUCCESS, INFO, WARNING } = logLevelMap;
const { LOGGER_OFF, LOGGER_DEBUG } = logModeMap;

type AnyLoggerMode = typeof logModeMap[keyof LogModeMap];

type LoggerOptions = {
    /**
     * Log level mode descriptor.
     */
    logLevel: AnyLoggerMode;
};

type AnyMessageType = typeof logLevelMap[keyof LogLevelMap];

type SendArgs = {
    /**
     * Constant, message sender type.
     */
    type: AnyMessageType;
    /**
     * Message text string.
     */
    message: string;
};

/**
 *  Logger class contains methods used for sending messages of appropriate type.
 */
class Logger {
    /**
     * Logger object instance.
     * @private
     */
    private static instance: Logger;

    /**
     * Sends logger message of appropriate type
     * @param {string} type
     *    message type
     * @param {string} color (rgba)
     *    message color
     * @param {string} message text
     *    message content
     * @return {void}
     */
    static sendMessage(type: AnyMessageType, color: string, message: string): void {
        const date = new Date();

        // eslint-disable-next-line no-console
        console.log(
            `%c[${type}]%c ${message}\n%c[Timestamp]%c ${formatLoggerDate(date)}`,
            `color: ${color}`,
            'color: inherit',
            `color: ${color}`,
            'color: inherit'
        );
    }

    /**
     * The static method that controls the access to the singleton instance.
     * @return {Logger} logger instance.
     */
    public static getInstance(): Logger {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (! Logger.instance) {
            Logger.instance = new Logger({ logLevel: config.logLevel });
        }

        return Logger.instance;
    }

    /**
     * Logger operation mode.
     * @protected
     */
    protected mode: AnyLoggerMode;

    /**
     * Creates class instance.
     * @param {LoggerOptions} options
     *      Logger options.
     * @private
     */
    private constructor(options: LoggerOptions) {
        this.mode = options.logLevel || LOGGER_OFF;

        if (this.mode !== LOGGER_OFF) {
            Logger.sendMessage('Info', 'rgb(49,196,251)', `Logger is in [${this.mode}] mode.`);
        }
    }

    /**
     * Creates logger message of appropriate type, allows debug messages in debug mode
     *
     * @param {SendArgs} args
     *    arguments
     *
     * @return {null|void}
     *    logger message
     */
    public send(args: SendArgs): void | null {
        const { type, message } = args;
        const { mode } = this;

        if (mode === LOGGER_OFF) {
            return null;
        }

        // prettier-ignore
        switch (type) {
            case ERROR:
                return Logger.sendMessage('Error', 'rgb(255, 105, 100)', message);
            case SUCCESS:
                return Logger.sendMessage('Success', 'rgb(102,255,69)', message);
            case DEBUG:
                return mode === LOGGER_DEBUG
                    ? Logger.sendMessage('Debug', 'rgb(243,25,255)', message)
                    : null;
            case WARNING:
                return mode === LOGGER_DEBUG
                    ? Logger.sendMessage('Warning', 'rgb(255, 220, 93)', message)
                    : null;
            case INFO:
                return mode === LOGGER_DEBUG
                    ? Logger.sendMessage('Info', 'rgb(49,196,251)', message)
                    : null;
            default:
                return null;
        }
    }
}

export default Logger;
