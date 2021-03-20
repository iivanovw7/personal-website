/**
 * Module contains Spinner component
 * @module ui/elements/Spinner
 * @author Igor Ivanov
 */
import { createSelector } from '@reduxjs/toolkit';
import React, { FC, CSSProperties, memo } from 'react';
import { SelfBuildingSquareSpinner } from 'react-epic-spinners';
import { connect } from 'react-redux';

import { makeSelectTheme } from '../../components/ThemeProvider/model/selectors';
import { colorSet } from '../../styles/settings';

/**
 * Default spinner size in `px`.
 * @type {number}
 */
export const defaultSpinnerSize = 50;

/**
 * Default multiplexer, used to calculate transitions.
 * @type {number}
 */
export const multiplexer = 0.5;

/**
 * Default Spinner styles.
 * @type {CSSProperties}
 */
export const defaultStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-${defaultSpinnerSize * multiplexer}px, -${defaultSpinnerSize * multiplexer}px)`,
};

interface IMapStateToPropsTypes {
    mode: string
}

interface ISpinnerProps {
    /**
     * Specifies the color of the spinner.
     */
    color?: string;
    /**
     * Specifies how large spinner should be rendered.
     */
    size?: number;
    /**
     * Additional inline styles.
     */
    style?: CSSProperties;
}

/**
 * Creates image component.
 * @name Components/Spinner
 * @method
 *
 * @param {ISpinnerProps} props - contains component props.
 * @return {ReactNode} React component with children.
 * @constructor
 */
const Spinner: FC<ISpinnerProps & IMapStateToPropsTypes> = (props: ISpinnerProps & IMapStateToPropsTypes) => {
    const { mode, color = colorSet[mode].colorPrimary, size = defaultSpinnerSize, style = defaultStyles } = props;

    return (
        <SelfBuildingSquareSpinner color={color} size={size} style={style} />
    );
};

/**
 * Function selects parts of the state required in component.
 * @method
 * @see {@link module:ui/containers/ThemeProvider/model/selectors}
 * @return {Function} selector
 */
const mapStateToProps = createSelector(makeSelectTheme(), (mode: string) => {
    return {
        mode,
    };
});

export default connect(mapStateToProps)(
    memo(Spinner)
);

export { Spinner as OriginalSpinner };
