/**
 * Module contains switch component
 * @module ui/elements/Switch
 * @author Igor Ivanov
 */
import React, { memo, ReactElement } from 'react';
import { CSSProp } from 'styled-components';

import { Checkbox, Container, Handle, Wrapper } from './Styled';

interface ISwitchProps {
    /** If switch is enabled. */
    checked: boolean,
    /** Switch handler. */
    onChange: () => void,
    /** If passed will be used as background image for checked state. */
    checkedImg: string | null,
    styling: CSSProp,
    /** Flag defines theme switch. */
    themeSwitch: boolean,
    /** If passed will be used as background image for unchecked state. */
    uncheckedImg: string | null,
    /** Styles variant option. */
    variant: 'primary' | 'secondary'
}

/**
 * Creates switch component.
 * @name elements/Switch
 * @method
 * @param {Object} props - contains component props
 * @return {ReactElement} React component with children.
 * @constructor
 */
function Switch(props: ISwitchProps): ReactElement {
    const {
        onChange,
        checked,
        themeSwitch = false,
        variant = 'primary',
        styling,
        checkedImg = null,
        uncheckedImg = null
    } = props;

    return (
        <Wrapper variant={variant} styling={styling}>
            <Checkbox onChange={onChange} checked={checked} />
            <Handle variant={variant} />
            <Container
                id="switchImgContainer"
                themeSwitch={themeSwitch}
                image={checked
                    ? checkedImg
                    : uncheckedImg}
                checked={checked}
            />
        </Wrapper>
    );
}

export default memo(Switch);
