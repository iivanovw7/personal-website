/**
 * Module contains react-intl high order component.
 * @module ui/components/LocaleProvider
 * @author Igor Ivanov
 */
import React, { Children, memo, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { DEFAULT_LOCALE } from './model/constants';
import { makeSelectLocale } from './model/selectors';

export interface LocaleProviderProps {
    /**
     * Collection of children components.
     */
    children?: ReactNode
    /**
     * Locale string.
     */
    locale: string;
    /**
     * Current localizations messages set.
     */
    messages: any; // eslint-disable-line
}

/**
 * Creates IntlProvider HOC to inject localization.
 * @method
 * @param {Object} props - contains component props.
 * @return {ReactNode} React component with children.
 * @constructor
 */
function LocaleProvider(props: LocaleProviderProps) {
    const { locale = DEFAULT_LOCALE, messages, children } = props;

    const trimmedLocale = locale.includes('-')
        ? locale.split(/[-]/)[0]
        : locale;

    return (
        <IntlProvider locale={trimmedLocale} key={locale} messages={messages[locale]}>
            {Children.only(children)}
        </IntlProvider>
    );
}

/**
 * Function selects parts of the state required in component.
 * @func mapStateToProps
 * @see {@link module:containers/LocaleProvider/model/selectors}
 * @return {Function} selector
 */
const mapStateToProps = createSelector(
    makeSelectLocale,
    (locale) => ({ locale }), // eslint-disable-line
);

// Not using `compose` here due to errors https://stackoverflow.com/questions/51605112/react-recompose-causing-typescript-error-on-props
export default connect(mapStateToProps)(
    memo(LocaleProvider)
);
