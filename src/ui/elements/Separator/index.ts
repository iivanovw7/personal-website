/**
 * Module contains Separator component
 * @module components/Separator
 * @author Igor Ivanov
 */
import { linearGradient } from 'polished';
import styled, { css, CSSProp } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { zIndex } from '../../styles/mixins';
import { colorSet } from '../../styles/settings';

const { first, second, third } = colorSet.gradients;
const defaultHeight = 0.125;

type TSeparatorProps = PartialAndNullable<{
    /** Flag determines if separator is being used in TopBar header. */
    header?: boolean;
    /** Separator height in `rem`. */
    height?: number;
    /** Additional component styling */
    styling?: CSSProp;
}>;

export const ContentStyling = css`
    filter: invert(1);
    margin-top: 1rem;
    opacity: 0.7;
`;

const Separator = styled.div<TSeparatorProps>`
    height: ${ (props) => props.height || defaultHeight }rem;
    ${ linearGradient({
        colorStops: [`${ String(first) } 0%`, `${ String(second) } 50%`, `${ String(third) } 95%`],
        toDirection: 'to right',
        fallback: first,
    }) };
    ${ (props) => props.styling };
    ${ (props) => props.header && `
        z-index: ${ String(zIndex.Separator) };
    ` };
    width: 100%;
`;

export default Separator;
