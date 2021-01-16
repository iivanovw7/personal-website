/**
 * Module contains additional styles used in navigation links.
 * @module components/Navigation/NavLinkStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { styleMixins } from '../../styles/mixins';

const NavLinkStyles = css`
    display: table-cell;
    height: 2.25em;
    ${styleMixins.fadeInTop};
`;

export default NavLinkStyles;
