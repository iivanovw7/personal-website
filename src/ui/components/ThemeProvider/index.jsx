/** Module contains theme provider HOC.
 * @module ui/components/ThemeProvider
 * @author Igor Ivanov
 */
import { compose } from '@reduxjs/toolkit';
import * as PropTypes from 'prop-types';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { makeSelectTheme } from './model/selectors';

/**
 * Creates Styled theme provider HOC to inject theme settings.
 * @method
 * @param {Object.<module:ui/components/ThemeProvider~propTypes>} props
 *  contains component props
 *  @see {@link module:containers/ThemeProvider~propTypes}
 * @return {JSX.Element} React component with children.
 * @constructor
 */
function ThemeProvider(props) {
    const { children, theme } = props;

    return <StyledThemeProvider theme={{ mode: theme }}>{React.Children.only(children)}</StyledThemeProvider>;
}

/**
 * @name ThemeProvider.propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} props.theme - theme string.
 * @property {Array} props.children - collection of children components.
 * @return {Array} React propTypes
 */
ThemeProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.node])),
    ]).isRequired,
    theme: PropTypes.string.isRequired,
};

/**
 * Function selects parts of the state required in component.
 * @method
 * @see {@link module:components/ThemeProvider/model/selectors}
 * @return {Function} selector
 */
const mapStateToProps = createSelector(makeSelectTheme(), (theme) => ({
    theme,
}));

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect, memo)(ThemeProvider);
