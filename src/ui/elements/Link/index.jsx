/**
 * Module contains button component
 * @module ui/elements/Link
 */
import * as PropTypes from 'prop-types';
import React, { Children } from 'react';

import StyledLink from './StyledLink';

/**
 * Creates button component.
 * @name elements/Link
 * @method
 * @constructor
 *
 * @param {Object.<module:ui/elements/Link~propTypes>} props
 *  contains component props
 *  @see {@link module:elements/Link~propTypes}
 *
 * @return {JSX.Element} React component with children.
 */
function Link(props) {
    const { target, href, children, styling, variant } = props;

    return (
        <StyledLink styling={styling} target={target} href={href} variant={variant}>
            {Children.toArray(children)}
        </StyledLink>
    );
}

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} props.href - target link.
 * @property {string | Image} [props.children = []] - button children element or text.
 * @property {string} [props.target = '_blank'] - target prop.
 * @property {Array.<string>} [props.styling = []] - image additional styles.
 * @property {string} [props.variant = false] - variant string.
 * @return {Array} React propTypes
 */
Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.node])),
    ]),
    styling: PropTypes.array,
    target: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary']),
};

Link.defaultProps = {
    children: [],
    styling: [],
    target: '_blank',
    variant: 'primary',
};

export default Link;
