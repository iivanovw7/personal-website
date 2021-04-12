/**
 * Module contains button component
 * @module ui/elements/Button
 * @author Igor Ivanov
 */
import React, { memo, ReactNode } from 'react';
import { CSSProp } from 'styled-components';

import { Button as StyledButton } from './Styled';

export type TButtonVariant = 'primary' | 'secondary' | 'alert';

export interface IButtonProps {
    /** Button children element or text. */
    children?: ReactNode;
    /**
     *  Any additional string or number passed in data-id field. [dataId = 0]
     *  @see {@link https://developer.mozilla.org/ru/docs/Learn/HTML/Howto/Use_data_attributes}
     */
    dataId?: string | number;
    /** Click handler. */
    onClick: () => void;
    /** Additional styles. */
    styling?: CSSProp;
    /** Color variant string. [variant = 'primary'] */
    variant?: TButtonVariant;
}

/**
 * Creates styled button component.
 * @name elements/Button
 * @method
 * @param {Object} props - contains component props
 * @return {JSX.Element} React component with children.
 * @constructor
 */
const Button = (props: IButtonProps): JSX.Element => {
    const { children, onClick, dataId, styling, variant } = props;

    return (
        <StyledButton
            dataId={ dataId }
            variant={ variant }
            styling={ styling }
            onClick={ onClick }>
            { children }
        </StyledButton>
    );
};

Button.defaultProps = {
    dataId: 0,
    variant: 'primary',
};

export default memo(Button);
