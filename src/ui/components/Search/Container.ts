/**
 * Module contains search bar icon container.
 * @module ui/components/Search/IconContainer
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { TVariant } from '../../elements/TextInput';
import { timeouts } from '../../styles/settings';
import { inputBorderColor, inputBorderFocusColor } from '../../styles/theme/inputs';

type TContainerProps = PartialAndNullable<{
    focused: boolean;
    variant?: TVariant;
}>;

/* eslint-disable @typescript-eslint/indent */

const Container = styled.div<TContainerProps>`
    border: 0;
    bottom: 0;
    height: 1.43rem;
    position: absolute;
    right: 0;
    width: 1.3em;

    svg {
        color: ${ (props: TContainerProps) => (props.focused // eslint-disable-line
            ? inputBorderFocusColor
            : inputBorderColor
        ) };
        display: block;
        transition: color ${timeouts.transition}s;
    }
`;

/* eslint-enable @typescript-eslint/indent */

export default Container;
