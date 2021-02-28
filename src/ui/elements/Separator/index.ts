/**
 * Module contains Separator component
 * @module components/Separator
 * @author Igor Ivanov
 */
import { linearGradient } from 'polished';
import styled, { CSSProp } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { zIndex } from '../../styles/mixins';
import { colorSet } from '../../styles/settings';

const { first, second, third } = colorSet.gradients;
const defaultHeight = 0.125;

type TSeparatorProps = PartialAndNullable<{
    styling?: CSSProp,
    /** Separator height in `rem`. */
    height?: number
}>;

const Separator = styled.div<TSeparatorProps>`
  height: ${(props) => props.height || defaultHeight}rem;
  ${linearGradient({
        colorStops: [`${String(first)} 0%`, `${String(second)} 50%`, `${String(third)} 95%`],
        toDirection: 'to right',
        fallback: first,
    })};
  ${(props) => props.styling};
  width: 100%;
  z-index: ${zIndex.Separator};
`;

export default Separator;
