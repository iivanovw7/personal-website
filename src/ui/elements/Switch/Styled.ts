/**
 * Module contains styled elements.
 * @module ui/components/Switch/Styled
 * @author Igor Ivanov
 */
import styled, { CSSProp } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { zIndex } from '../../styles/mixins';
import { timeouts } from '../../styles/settings';
import { switchBackgroundColor, switchFocusColor, switchHandleColor } from '../../styles/theme/switches';

type ContainerProps = PartialAndNullable<{
    id: string;
    checked: boolean;
    image: string;
    themeSwitch: boolean;
}>;

type HandleProps = PartialAndNullable<{
    variant: string;
}>;

type WrapperProps = PartialAndNullable<{
    variant: string;
    styling: CSSProp
}>;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
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

export const Container = styled.div<ContainerProps>`
    background-image: ${(props) => (props.image
        ? `url(${ props.image })`
        : 'none'
    )};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0.24rem;
    content: '';
    display: ${(props) => (props.themeSwitch
        ? 'block'
        : 'none'
    )};
    height: 1rem;
    left: ${(props) => (props.checked
        ? 6
        : 30 // eslint-disable-line
    )}px;
    position: absolute;
    width: 1rem;
    z-index: ${ zIndex.ThemeSwitchContainer };
`;

export const Handle = styled.div<HandleProps>`
    background-color: ${ switchBackgroundColor };
    border-radius: 2.13rem;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform ${ timeouts.transition }s;

    &:before {
        background-color: ${ switchHandleColor };
        border-radius: 50%;
        bottom: 0.1rem;
        content: '';
        height: 1.22rem;
        left: 0.122rem;
        position: absolute;
        transition: transform ${ timeouts.transition }s;
        width: 1.22rem;
        z-index: ${ zIndex.ThemeSwitchHandle };

        ${/* sc-custom */ Checkbox }:focus + & {
            box-shadow: 0 0 2px 3px ${ switchFocusColor };
        }

        ${/* sc-custom */ Checkbox }:checked + & {
            transform: translateX(1.6rem);
        }
    }
`;

export const Wrapper = styled.label<WrapperProps>`
    display: inline-block;
    height: 1.5rem;
    margin: 0 auto;
    ${ (props) => props.styling };
    position: relative;
    vertical-align: middle;
    width: 3.13rem;
`;
