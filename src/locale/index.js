/**
 * Module contains localization setup.
 * @module locale
 * @author Igor Ivanov
 */
import enCommonMessages from './translations/en/common';
import enErrorMessage from './translations/en/error-message';
import enNavigationMessages from './translations/en/navigation';
import enPostMessage from './translations/en/post';
import enPostsMessage from './translations/en/posts';
import enValidation from './translations/en/validation';
import ruCommonMessages from './translations/ru/common';
import ruErrorMessage from './translations/ru/error-message';
import ruNavigationMessages from './translations/ru/navigation';
import ruPostMessage from './translations/ru/post';
import ruPostsMessage from './translations/ru/posts';
import ruValidation from './translations/ru/validation';

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
    en: { ...enCommonMessages, ...enNavigationMessages, ...enErrorMessage, ...enPostMessage, ...enPostsMessage, ...enValidation },
    ru: { ...ruCommonMessages, ...ruNavigationMessages, ...ruErrorMessage, ...ruPostMessage, ...ruPostsMessage, ...ruValidation },
};

/**
 * Returns formatted intl message.
 * @param {Object} message - represents react intl message description.
 * @param {Object} props - component props.
 * @param {Object} values - message values.
 * @return {string|*} formatted text or empty string in case formatted message cant be received.
 */
export function getText(message, props = {}, values = {}) {
    const { intl } = props;

    if (message && message.id && props.intl && typeof props.intl.formatMessage === 'function') {
        return intl.formatMessage(message, values);
    }

    return '';
}

/* eslint-disable */
/**
 * Adds Intl polyfills
 */
export function addIntlPolyfills() {
    if (!global.Intl) {
        global.Intl = require('intl');
    }

    if (!Intl.PluralRules) {
        require('@formatjs/intl-pluralrules/polyfill');
        require('@formatjs/intl-pluralrules/locale-data/ru');
        require('@formatjs/intl-pluralrules/locale-data/en');
    }

    if (!Intl.RelativeTimeFormat) {
        require('@formatjs/intl-relativetimeformat/polyfill');
        require('@formatjs/intl-relativetimeformat/locale-data/ru');
        require('@formatjs/intl-relativetimeformat/locale-data/en');
    }
}

/* eslint-enable */
