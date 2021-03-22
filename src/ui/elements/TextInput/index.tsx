/**
 * Module contains text input component.
 * @module ui/elements/TextInput
 */
import React, { ChangeEvent, Children, memo, ReactNode } from 'react';
import { CSSProp } from 'styled-components';

import { Input, Label, Span } from './Styled';

export type TVariant = 'primary' | 'secondary' | 'disabled';

export interface ITextInputProps {
    /** Input children, eg search button and etc. */
    children?: ReactNode;
    /** Input `id`. */
    id: string;
    /** Validation text. */
    validate?: string;
    /** Label text. */
    label?: string;
    /** Input type [ type = 'text' ] */
    type?: string;
    /** Text input value. */
    value: string;
    /** onInput event handler. */
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
    /** onChange event handler. */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    /** onFocus event handler. */
    onFocus: () => void;
    /** onBlur event handler. */
    onBlur: () => void;
    /** Placeholder text. */
    placeholder?: string;
    /** If input should gain focus on mouse enter. */
    focusOnMouseEnter?: boolean;
    /** Additional css styles assigned to input element. */
    styling?: CSSProp;
    /** Additional css styles assigned to label element. */
    stylingLabel?: CSSProp;
    /** Input variant */
    variant?: TVariant;
}

/**
 * Creates text input component.
 * @name elements/TextInput
 * @method
 * @param {ITextInputProps} props - object represents component props.
 * @return {ReactElement} React component.
 * @constructor
 */
function TextInput(props: ITextInputProps) {
    const {
        label,
        children,
        validate,
        id,
        placeholder,
        onChange,
        onFocus,
        onBlur,
        value,
        onInput,
        styling,
        stylingLabel,
        focusOnMouseEnter = false,
        type = 'text',
        variant = 'primary'
    } = props;
    const inputRef = React.createRef<HTMLInputElement>();

    /**
     * Handles input mouse enter.
     */
    function handleMouseEnter() {
        if (inputRef.current && focusOnMouseEnter) {
            inputRef.current.focus();
        }
    }

    return (
        <Label
            ref={ inputRef }
            htmlFor={ id }
            styling={ stylingLabel }
            onMouseEnter={ handleMouseEnter }
        >
            { label }
            <Span>{ validate }</Span>
            <Input
                type={ type }
                id={ id }
                variant={ variant }
                placeholder={ placeholder }
                value={ value }
                styling={ styling }
                onChange={ onChange }
                onInput={ onInput }
                onFocus={ onFocus }
                onBlur={ onBlur }
            />
            { Children.toArray(children) }
        </Label>
    );
}

export default memo(TextInput);
