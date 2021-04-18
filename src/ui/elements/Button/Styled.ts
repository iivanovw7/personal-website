/**
 * Module styles for Button component.
 * @module ui/elements/Button/Styled
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { btnBackground, btnTextColor } from '../../styles/theme/buttons';

import { IButtonProps } from './index';

export const Button = styled.button.attrs<IButtonProps>((attrs) => {
    return { 'data-id': attrs.dataId };
})<IButtonProps>`
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
