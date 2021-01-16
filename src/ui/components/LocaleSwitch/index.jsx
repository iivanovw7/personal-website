/**
 * Module contains application locale switch component.
 * @module components/LocaleSwitch
 * @author Igor Ivanov
 */
import { compose } from '@reduxjs/toolkit';
import * as PropTypes from 'prop-types';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Button from '../../elements/Button';
import { changeLocale } from '../LocaleProvider/model';
import { LOCALE_RESOURCES } from '../LocaleProvider/model/constants';
import { makeSelectLocale } from '../LocaleProvider/model/selectors';

import ButtonStyles from './ButtonStyles';
import LocaleImage from './LocaleImage';
import nextLocaleKey from './model/utils';

/**
 * Creates LocaleSwitch component.
 * @method
 * @param {Object.<module:components/LocaleSwitch~propTypes>} props
 *  contains component props
 *  @see {@link module:components/LocaleSwitch~propTypes}
 * @return {JSX.Element} React component with children.
 * @constructor
 */
function LocaleSwitch(props) {
    const { locale, onLocaleChange } = props;
    const localeKey = nextLocaleKey(locale);
    const localeData = LOCALE_RESOURCES[localeKey];

    /**
     * Handles locale button click.
     * @return {*} returns onLocaleChange handles with new locale name.
     */
    function handleClick() {
        return onLocaleChange(localeKey);
    }

    return (
        <Button variant="primary" styling={ButtonStyles} onClick={handleClick}>
            {LocaleImage(localeData)}
        </Button>
    );
}

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} [props.locale = 'en'] - locale string.
 * @property {Function} props.onLocaleChange - locale change handler.
 * @return {Array} React propTypes
 */
LocaleSwitch.propTypes = {
    locale: PropTypes.string,
    onLocaleChange: PropTypes.func.isRequired,
};

LocaleSwitch.defaultProps = {
    locale: 'en',
};

/**
 * Function selects parts of the state required in component.
 * @func mapStateToProps
 * @see {@link module:containers/LocaleProvider/model/selectors}
 * @return {Function} selector
 */
const mapStateToProps = createSelector(makeSelectLocale(), (locale) => ({
    locale,
}));

/**
 * Function mapping dispatch to props.
 * Dispatching action which may cause change of application state.
 * @func mapDispatchToProps
 * @param {Function} dispatch method.
 * @return {Object} redux container
 */
export function mapDispatchToProps(dispatch) {
    return {
        onLocaleChange: (locale) => dispatch(changeLocale(locale)),
        dispatch,
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LocaleSwitch);
