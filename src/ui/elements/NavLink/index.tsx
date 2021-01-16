/**
 * Module contains navigation link
 * @module ui/elements/NavLink
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React, { memo, ReactElement } from 'react';

import StyledNavLink from './StyledNavLink';

/**
 * Creates NavLink component.
 * @name elements/NavLink
 * @method
 * @param {Object.<module:ui/elements/NavLink~propTypes>} props
 *  contains component props
 *  @see {@link module:elements/NavLink~propTypes}
 * @return {Node} React component with children.
 * @constructor
 */
function NavLink(props: PropTypes.InferProps<typeof NavLink.propTypes>): ReactElement<JSX.Element> {
    const { icon, text, variant, link, styling } = props;

    return (
        <StyledNavLink exact variant={variant} styling={styling} to={link}>
            {icon && <i className="material-icons">{icon}</i>}
            {text}
        </StyledNavLink>
    );
}

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} props.link - navigation link address.
 * @property {string} props.text - navigation link text.
 * @property {string} [props.icon = null] - material icon string.
 * @property {Array.<string>} [props.styling = []] - image additional styles.
 * @property {Array.<string>} [props.variant = 'primary'] - styles variant option.
 * @return {Array} React propTypes
 */
NavLink.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    styling: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    variant: PropTypes.oneOf(['primary', 'secondary']),
};

NavLink.defaultProps = {
    icon: null,
    styling: [],
    variant: 'primary',
};

export default memo(NavLink);
