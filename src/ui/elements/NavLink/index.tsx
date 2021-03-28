/**
 * Module contains navigation link
 * @module ui/elements/NavLink
 * @author Igor Ivanov
 */
import React, { Children, memo, ReactElement, ReactNode } from 'react';
import { CSSProp } from 'styled-components';

import StyledNavLink from './StyledNavLink';

export type TVariant = 'primary' | 'secondary' | 'title';

export interface INavLinkProps {
    /** Input children, eg search span, header and etc. */
    children?: ReactNode;
    /** Navigation link address. */
    link: string;
    /** Navigation link text. */
    text?: string;
    /** Defines `exact` link. */
    exact?: boolean;
    /** Material icon string. */
    icon?: string;
    /** Styles variant option.  */
    variant?: TVariant;
    /** Defines `strict` link. */
    strict?: boolean;
    /** Object represents router `location`. */
    location?: Location;
    /** Additional styles. */
    styles?: CSSProp;
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
        children = [],
        icon = null,
        exact = true,
        text = '',
        variant = 'primary',
        link,
        styles,
        location: appLocation,
        strict = false
    } = props;

    return (
        <StyledNavLink
            exact={exact}
            strict={strict}
            variant={variant}
            location={appLocation}
            styles={styles}
            icon={icon}
            text={text}
            to={link}>
            {icon && <i className="material-icons">{icon}</i>}
            {text}
            {Children.toArray(children)}
        </StyledNavLink>
    );
}

export default memo(NavLink);
