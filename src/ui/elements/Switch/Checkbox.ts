/**
 * Module contains styled hidden checkbox element.
 * @module ui/components/Switch/Checkbox
 * @author Igor Ivanov
 */
import styled from 'styled-components';

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export default Checkbox;
