/**
 * Module contains react-intl high order component.
 * @module ui/components/LocaleProvider
 * @author Igor Ivanov
 */
import { compose } from '@reduxjs/toolkit';
import * as PropTypes from 'prop-types';
import React, { memo } from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { DEFAULT_LOCALE } from './model/constants';
import { makeSelectLocale } from './model/selectors';

/**
 * Creates IntlProvider HOC to inject localization.
 * @method
 * @param {Object.<module:ui/components/LocaleProvider~propTypes>} props
 *  contains component props
 *  @see {@link module:containers/LocaleProvider~propTypes}
 * @return {JSX.Element} React component with children.
 * @constructor
 */
function LocaleProvider(props) {
    const { locale, messages, children } = props;
    // prettier-ignore
    const trimmedLocale = locale.includes('-')
        ? locale.split(/[-]/)[0]
        : locale;

    return (
        <IntlProvider locale={trimmedLocale} key={locale} messages={messages[locale]}>
            {React.Children.only(children)}
        </IntlProvider>
    );
}

/**
 * @name LocaleProvider.propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} [props.locale = 'en'] - locale string.
 * @property {Object} props.messages - current localizations messages set.
 * @property {Array} props.children - collection of children components.
 * @return {Array} React propTypes
 */
LocaleProvider.propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.node])),
    ]).isRequired,
};

LocaleProvider.defaultProps = {
    locale: DEFAULT_LOCALE,
};

/**
 * Function selects parts of the state required in component.
 * @method
 * @see {@link module:components/LocaleProvider/model/selectors}
 * @return {Function} selector
 */
const mapStateToProps = createSelector(makeSelectLocale(), (locale) => ({
    locale,
}));

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect, memo)(LocaleProvider);
