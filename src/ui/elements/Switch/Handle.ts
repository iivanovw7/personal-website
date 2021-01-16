/**
 * Module contains styled switch handle element.
 * @module ui/components/Switch/Handle
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { zIndex } from '../../styles/mixins';
import { switchHandleColor, switchBackgroundColor, switchFocusColor } from '../../styles/theme/switches';

import Checkbox from './Checkbox';

const Handle = styled.div`
    background-color: ${switchBackgroundColor};
    border-radius: 2.13rem;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform 0.4s;

    &:before {
        background-color: ${switchHandleColor};
        border-radius: 50%;
        bottom: 0.1rem;
        content: '';
        height: 1.22rem;
        left: 0.1rem;
        position: absolute;
        transition: transform 0.4s;
        width: 1.22rem;
        z-index: ${zIndex.ThemeSwitchHandle};

        ${/* sc-custom */ Checkbox}:focus + & {
            box-shadow: 0 0 2px 3px ${switchFocusColor};
        }

        ${/* sc-custom */ Checkbox}:checked + & {
            transform: translateX(1.6rem);
        }
    }
`;

export default Handle;
