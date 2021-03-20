/**
 * Module contains styled button for switch component
 * @module ui/elements/Button/StyledButton
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { btnBackground, btnTextColor } from '../../styles/theme/buttons';

// eslint-disable-next-line
const StyledButton = styled.button.attrs(({ index }) => ({ 'data-index': index }))`
  background-color: ${btnBackground};
  border: none;
  color: ${btnTextColor};
  ${(props) => props.styling};
  outline: none;

  &:hover {
    cursor: pointer;
    user-select: none;
  }
`;

export default StyledButton;
