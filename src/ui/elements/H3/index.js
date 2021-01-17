/**
 * Module contains H3 header component
 * @module ui/elements/H3
 * @author Igor Ivanov
 */
import styled from 'styled-components';

const H3 = styled.h3`
    font-size: 1.4em;
    margin-bottom: 0.25em;
    ${(props) => props.styling};
`;

export default H3;
