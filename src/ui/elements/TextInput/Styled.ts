/**
 * Module contains styled input elements.
 * @module ui/elements/Input/Label
 * @author Igor Ivanov
 */
import styled, { CSSProp } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { inputBackground, inputText, inputValidation } from '../../styles/theme/inputs';

import { TVariant } from './index';

type TLabelProps = PartialAndNullable<{
    styling?: CSSProp;
    ref: any // eslint-disable-line
}>;

type TInputProps = {
    styling?: CSSProp;
    variant: TVariant;
};

export const Label = styled.label<TLabelProps>`
    ${(props) => props.styling};
    width: 100%;
`;

export const Input = styled.input<TInputProps>`
    background-color: ${ inputBackground };
    border-radius: 0.16rem;
    color: ${ inputText };
    font-size: 0.7em;
    margin-top: 0.5em;
    ${(props) => props.styling};
    padding: 0.5em;
`;

export const Span = styled.span`
    color: ${ inputValidation };
    font-size: 0.7em;
`;
