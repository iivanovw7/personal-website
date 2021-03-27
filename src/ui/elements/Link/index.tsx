/**
 * Module contains button component
 * @module ui/elements/Link
 */
import React, { Children, ReactElement, ReactNode } from 'react';
import { CSSProp } from 'styled-components';

import StyledLink from './StyledLink';

export type TVariant = 'primary' | 'secondary';

export interface ILinkProps {
    /** Input children, eg search span, header and etc. */
    children?: ReactNode;
    /** Url link address. */
    href: string;
    /** Additional styles. */
    styling?: CSSProp;
    /** Target attribute. */
    target?: string;
    /** Input variant. */
    variant?: TVariant;
}

/**
 * Creates button component.
 * @name elements/Link
 * @method
 * @constructor
 *
 * @param {ILinkProps} props - contains component props
 *
 * @return {JSX.Element} React component with children.
 */
function Link(props: ILinkProps): ReactElement<JSX.Element> {
    const { target = '_blank', href, children = [], styling = [], variant = 'primary' } = props;

    return (
        <StyledLink styling={styling} target={target} href={href} variant={variant}>
            {Children.toArray(children)}
        </StyledLink>
    );
}

export default Link;
