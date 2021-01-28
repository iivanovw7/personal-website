/**
 * Module contains styled nav link element.
 * @module ui/components/NavLink/StyledNavLink
 * @author Igor Ivanov
 */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { styleMixins } from '../../styles/mixins';
import { btnBackground } from '../../styles/theme/buttons';
import { navLinkTextColor, navLinkTextColorActive, navLinkBackgroundHover } from '../../styles/theme/links';

const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
    align-items: center;
    background-color: transparent;
    border: 1px solid ${navLinkTextColor};
    border-radius: 0.134rem;
    color: ${navLinkTextColor};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0.38rem;
    padding: 0.38rem;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
    ${/* sc-custom */ (props) => props.styling};
    ${/* sc-custom */ styleMixins.focusBoxShadow('0.1rem', 'transparent', navLinkTextColor)};

    &:hover {
        background-color: ${navLinkBackgroundHover};
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
        user-select: none;
    }

    &.${activeClassName} {
        background-color: ${btnBackground};
        color: ${navLinkTextColorActive};
        transition: all 0.2s ease-in-out;
    }
`;

export default StyledNavLink;
