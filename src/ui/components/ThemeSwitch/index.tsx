/**
 * Module contains application theme switch component.
 * @module ui/components/ThemeSwitch
 * @author Igor Ivanov
 */
import { compose } from '@reduxjs/toolkit';
import * as PropTypes from 'prop-types';
import React, { Dispatch, memo } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Dark from '../../../../assets/svg/theme/moon.svg';
import Light from '../../../../assets/svg/theme/sun.svg';
import { DARK_THEME, LIGHT_THEME } from '../../../config/constants';
import Switch from '../../elements/Switch';
import { ChangeTheme, Theme, changeTheme } from '../ThemeProvider/model';
import { DEFAULT_THEME } from '../ThemeProvider/model/constants';
import { makeSelectTheme } from '../ThemeProvider/model/selectors';

import { isDarkTheme } from './model/utils';
import SwitchStyles from './SwitchStyles';

interface DispatchProps {
    onThemeChange: (theme: Theme) => void;
    dispatch: Dispatch<ChangeTheme>;
}

/**
 * Creates ThemeSwitch component.
 * @method
 *
 * @param {Object.<module:ui/components/ThemeSwitch~propTypes>} props
 *  contains component props
 *  @see {@link module:components/ThemeSwitch~PropTypes}
 * @return {Node} React component with children.
 * @constructor
 */
function ThemeSwitch(props) {
    const { theme, onThemeChange } = props;

    /**
     * Handles locale button click.
     * @return {*} return onLocaleChange handles with new theme name.
     */
    function handleChange() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return onThemeChange(isDarkTheme(theme)
            ? LIGHT_THEME
            : DARK_THEME
        );
    }

    return (
        <Switch
            themeSwitch
            variant="primary"
            checked={isDarkTheme(theme)}
            styling={SwitchStyles}
            onChange={handleChange}
            checkedImg={Dark}
            uncheckedImg={Light}
        />
    );
}

/**
 * @name ThemeSwitch.propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} [props.theme = DEFAULT_THEME] - theme name.
 * @property {Function} props.onThemeChange - change theme handler.
 * @return {Array} React propTypes
 */
ThemeSwitch.propTypes = {
    onThemeChange: PropTypes.func.isRequired,
    theme: PropTypes.string,
};

ThemeSwitch.defaultProps = {
    theme: DEFAULT_THEME,
};

/**
 * Function selects parts of the state required in component.
 * @func mapStateToProps
 * @see {@link module:ui/containers/ThemeSwitch/model/selectors}
 * @return {Function} selector
 */
export const mapStateToProps = createSelector(
    makeSelectTheme(),
    (theme: Theme) => {
        return { theme };
    }
);

/**
 * Function mapping dispatch to props.
 * Dispatching action which may cause change of application state.
 * @func mapDispatchToProps
 * @param {Function} dispatch method.
 * @return {Object} redux container
 */
export function mapDispatchToProps(dispatch: Dispatch<ChangeTheme>): DispatchProps {
    return {
        onThemeChange: (theme: Theme) => dispatch(changeTheme(theme)),
        dispatch,
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ThemeSwitch);
// export { ThemeSwitch as OriginalThemeSwitch };
