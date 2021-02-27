/**
 * Module contains button component
 * @module ui/elements/Button
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import * as R from 'ramda';
import React, { Children, memo } from 'react';

import { isUndefined } from '../../../utils/helpers';

import StyledButton from './StyledButton';
import StyledLink from './StyledLink';

/**
 * Creates styled button component.
 * @name elements/Button
 * @method
 *
 * @param {Object.<module:ui/elements/Button~propTypes>} props
 *  contains component props
 *  @see {@link module:elements/Button~propTypes}
 * @return {JSX.Element} React component with children.
 * @constructor
 */
const Button = (props) => {
    const { variant, children, styling, onClick, index } = props;
    const ButtonElement = R.ifElse(
        R.pipe(R.prop('onClick'), isUndefined),
        R.always(<StyledLink {...props} />),
        R.always(<StyledButton {...props} />)
    );

    return (
        <ButtonElement data-index={index} variant={variant} styling={styling} onClick={onClick}>
            {Children.toArray(children)}
        </ButtonElement>
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
 * @property {boolean} [props.hidden = false] - if element should be hidden.
 * @property {number} [props.index = 0] - index which is passed in `data-index` attribute.
 * @return {Array} React propTypes
 */
Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.node])),
    ]),
    hidden: PropTypes.bool,
    href: PropTypes.string,
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    styling: PropTypes.array,
    target: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary', 'alert']),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    hidden: false,
    index: 0,
    target: '_blank',
    variant: 'primary',
};

export default memo(Button);
