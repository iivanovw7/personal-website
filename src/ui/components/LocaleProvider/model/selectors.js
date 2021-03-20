/**
 * Module contains selectors related to localization.
 * @module ui/components/LocaleProvider/model/selectors
 * @author Igor Ivanov
 */
import { createSelector } from '@reduxjs/toolkit';

import { initState } from './index';

/**
 * Selector to the language domain.
 * @method
 * @param {Object} state - application state.
 * @return {string} language - application language selector.
 */
const selectLanguage = (state) => state.language || initState;

/**
 * Selector to the locale.
 * @method
 * @param {Object} state - application state.
 * @return {string} locale - application locale selector.
 */
const selectLocale = (state) => state.language.locale || initState.locale;

/**
 * Select the language locale.
 * @method
 * @return {Function} creates new locale selector.
 */
const makeSelectLocale = createSelector(selectLanguage, (languageState) => languageState.locale);

export { selectLanguage, selectLocale, makeSelectLocale };
