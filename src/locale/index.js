/**
 * Module contains localization setup.
 * @module locale
 * @author Igor Ivanov
 */
import enCommonMessages from './translations/en/common.json';
import enErrorMessage from './translations/en/error-message.json';
import enNavigationMessages from './translations/en/navigation.json';
import ruCommonMessages from './translations/ru/common.json';
import ruErrorMessage from './translations/ru/error-message.json';
import ruNavigationMessages from './translations/ru/navigation.json';

/**
 * Localized messages.
 * @typedef {object} module:locale~LocalizedMessages
 * @property {Object} en - for english.
 * @property {Object} ru - for russian.
 */

/**
 * Exports localized messages for application.
 * @type {module:locale~LocalizedMessages}
 */
export const translationMessages = {
    en: { ...enCommonMessages, ...enNavigationMessages, ...enErrorMessage },
    ru: { ...ruCommonMessages, ...ruNavigationMessages, ...ruErrorMessage },
};

/**
 * Returns formatted intl message.
 * @param {Object} message - represents react intl message description.
 * @param {Object} props - component props.
 * @return {string|*} formatted text or empty string in case formatted message cant be received.
 */
export function getText(message, props = {}) {
    const { intl } = props;

    if (message && message.id && props.intl && typeof props.intl.formatMessage === 'function') {
        return intl.formatMessage(message);
    }

    return '';
}

/* eslint-disable */
/**
 * Adds Intl polyfills
 */
export function addIntlPolyfills() {
    if (!global.Intl) {
        global.Intl = require("intl");
    }

    if (!Intl.PluralRules) {
        require("@formatjs/intl-pluralrules/polyfill");
        require("@formatjs/intl-pluralrules/locale-data/ru");
        require("@formatjs/intl-pluralrules/locale-data/en");
    }

    if (!Intl.RelativeTimeFormat) {
        require("@formatjs/intl-relativetimeformat/polyfill");
        require("@formatjs/intl-relativetimeformat/locale-data/ru");
        require("@formatjs/intl-relativetimeformat/locale-data/en");
    }
}

/* eslint-enable */
