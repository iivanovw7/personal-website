/**
 * Module contains styled link component
 * @module ui/components/UI/Link/StyledLink
 */
import styled from 'styled-components';

import { styleMixins } from '../../styles/mixins';
import { linkColor } from '../../styles/theme/links';

const StyledLink = styled.a`
    color: ${linkColor};
    ${styleMixins.focusOutline(linkColor)}
    ${(props) => props.styling};
    padding: 0.38rem;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        user-select: none;
    }

    &:focus {

    }
`;

export default StyledLink;
