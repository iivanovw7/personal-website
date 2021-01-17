/**
 * Module contains H2 header component
 * @module ui/elements/H2
 * @author Igor Ivanov
 */
import styled from 'styled-components';

const H2 = styled.h2`
    font-size: 1.6em;
    ${(props) => props.styling};
`;

export default H2;
