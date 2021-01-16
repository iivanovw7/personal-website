/**
 * Module contains utils used in Locale Switch component
 * @module components/LocaleSwitch/model/utils
 * @author Igor Ivanov
 */
import { __, always, dec, either, head, ifElse, inc, indexOf, keys, length, lt, nth, pipe } from 'ramda';

import { DEFAULT_LOCALE, LOCALE_RESOURCES } from '../../LocaleProvider/model/constants';

/**
 *  Gets string representations of keys out of locales object
 *  @return {Array.<string>} locale names list
 */
const locales = keys(LOCALE_RESOURCES);
/**
 * Gets index of current locale.
 * @type {f1}
 */
const localeIndex = indexOf(__, locales);
/**
 * Gets length of locales list.
 */
const localesLength = length(locales);
/**
 * Verifies if there is nex locale available.
 * @type {f1}
 */
const hasNextLocale = lt(__, dec(localesLength));
/**
 * Returns firs locale, in case if no further locales available.
 */
const firstLocale = head(locales);

/**
 * Function selects next locale name.
 * Returns locale with next index if there is available one or first locale otherwise.
 * @type {Function|*}
 */
const newLocaleKey = pipe(
    localeIndex,
    ifElse(hasNextLocale, pipe(inc, nth(__, locales)), always(firstLocale)),
);

/**
 * Returns either a new locale key or default key.
 * @type {f1}
 */
const nextLocaleKey = either(newLocaleKey, DEFAULT_LOCALE);

export default nextLocaleKey;
