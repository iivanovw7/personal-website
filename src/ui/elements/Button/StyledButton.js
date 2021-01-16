/**
 * Module contains styled button for switch component
 * @module ui/elements/Button/StyledButton
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { btnBackground, btnTextColor } from '../../styles/theme/buttons';

// prettier-ignore
const StyledButton = styled.button.attrs(({ index }) => ({
    'data-index': index,
}))`
  background-color: ${btnBackground};
  border: none;
  color: ${btnTextColor};
  ${(props) => props.styling};
  opacity: ${(props) => (props.hide
        ? '0'
        : '1'
    )};
  outline: none;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    user-select: none;
  }
`;

export default StyledButton;
