/**
 * Module contains navigation link
 * @module ui/elements/NavLink
 * @author Igor Ivanov
 */
import React, { memo, ReactElement } from 'react';
import { CSSProp } from 'styled-components';

import StyledNavLink from './StyledNavLink';

export interface INavLinkProps {
    /** Navigation link address. */
    link: string;
    /** Navigation link text. */
    text: string;
    /** Defines `exact` link. */
    exact?: boolean;
    /** Material icon string. */
    icon?: string;
    /** Styles variant option.  */
    variant?: 'primary' | 'secondary';
    /** Defines `strict` link. */
    strict?: boolean;
    /** Object represents router `location`. */
    location?: Location;
    /** Additional styles. */
    styling?: CSSProp;
}

/**
 * Creates NavLink component.
 * @name elements/NavLink
 * @method
 * @param {Object} props - contains component props
 * @return {ReactElement<JSX.Element>} React component with children.
 * @constructor
 */
function NavLink(props: INavLinkProps): ReactElement<JSX.Element> {
    const {
        icon = null,
        exact = true,
        text,
        variant = 'primary',
        link,
        styling,
        location: appLocation,
        strict = false
    } = props;

    return (
        <StyledNavLink
            exact={exact}
            strict={strict}
            variant={variant}
            location={appLocation}
            styling={styling}
            to={link}>
            {icon && <i className="material-icons">{icon}</i>}
            {text}
        </StyledNavLink>
    );
}

export default memo(NavLink);
