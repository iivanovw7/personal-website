/**
 * Module contains styled wrapper around checkbox element.
 * @module ui/components/Switch/Wrapper
 * @author Igor Ivanov
 */
import styled from 'styled-components';

const Wrapper = styled.label`
    display: inline-block;
    height: 1.5rem;
    margin: 0 auto;
    ${(props) => props.styling};
    position: relative;
    vertical-align: middle;
    width: 3.13rem;
`;

export default Wrapper;
