/**
 * Module contains Spinner component
 * @module ui/elements/Spinner
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React from 'react';
import { SelfBuildingSquareSpinner } from 'react-epic-spinners';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { makeSelectTheme } from '../../components/ThemeProvider/model/selectors';
import { colorSet } from '../../styles/settings';

/**
 * Default spinner size in `px`.
 * @type {number}
 */
export const defaultSpinnerSize = 50;

/**
 * Creates image component.
 * @name Components/Spinner
 * @method
 *
 * @param {Object.<module:ui/elements/Spinner~propTypes>} props
 *  contains component props
 *  @see {@link module:ui/elements/Spinner~propTypes}
 * @return {Node} React component with children.
 * @constructor
 */
const Spinner = ({ color, size, style, mode }) => (
    <SelfBuildingSquareSpinner color={color || colorSet[mode].colorPrimary} size={size} style={style} />
);

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {number} props.size - specifies how large the spinner should be rendered.
 * @property {string} [props.color = transparent] - Specifies the color of the spinner.
 * @return {Array} React propTypes
 */
Spinner.propTypes = {
    mode: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    style: PropTypes.object,
};

Spinner.defaultProps = {
    size: defaultSpinnerSize,
    style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-${defaultSpinnerSize * 0.5}px, -${defaultSpinnerSize * 0.5}px)`,
    },
};

/**
 * Function selects parts of the state required in component.
 * @method
 * @see {@link module:ui/containers/ThemeProvider/model/selectors}
 * @return {Function} selector
 */
const mapStateToProps = createSelector(makeSelectTheme(), (mode) => ({
    mode,
}));

export default connect(mapStateToProps, null)(Spinner);

export { Spinner as OriginalSpinner };
