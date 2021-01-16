/**
 * Module contains styled link component
 * @module ui/elements/Button/StyledLink
 * @author Igor Ivanov
 */
import styled from 'styled-components';

const StyledLink = styled.a`
    border: none;
    ${(props) => props.styling}
    outline: none;

    &:hover {
        cursor: pointer;
        user-select: none;
    }
`;

export default StyledLink;
