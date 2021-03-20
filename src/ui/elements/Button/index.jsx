/**
 * Module contains button component
 * @module ui/elements/Button
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React, { Children, memo } from 'react';

import StyledButton from './StyledButton';


/**
 * Creates styled button component.
 * @name elements/Button
 * @method
 *
 * @param {Object.<module:ui/elements/Button~propTypes>} props
 *  contains component props
 *  @see {@link module:elements/Button~propTypes}
 * @return {JSX.Element} React component wFith children.
 * @constructor
 */
const Button = (props) => {
    const { children, onClick, dataId, styling, variant } = props;

    return (
        <StyledButton
            data-id={ dataId }
            variant={ variant }
            styling={ styling }
            onClick={ onClick }>
            { Children.toArray(children) }
        </StyledButton>
    );
};

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} [props.variant = 'primary'] - color variant string.
 * @property {Array.<Function | Node> | Function | Node} props.children - button children element or text.
 * @property {Array.<string>} [props.styling = []] - image additional styles.
 * @property {Function} props.onClick - click handler.
 * @property {string} props.href - target link.
 * @property {string} [props.target = '_blank'] - target prop.
 * @property {number} [props.dataId = 0] - dataId which is passed in `data-id` attribute.
 * @return {Array} React propTypes
 */
Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.node])),
    ]),
    dataId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    styling: PropTypes.array,
    variant: PropTypes.oneOf(['primary', 'secondary', 'alert']),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    dataId: 0,
    variant: 'primary',
};

export default memo(Button);
