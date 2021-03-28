/**
 * Module contains H2 header component
 * @module ui/elements/H2
 * @author Igor Ivanov
 */
import styled, { CSSProp } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { textColor } from '../../styles/theme/typography';

type H2Props = PartialAndNullable<{
    styles?: CSSProp
}>;

const H2 = styled.h2<H2Props>`
    color: ${textColor};
    font-size: 1.6rem;
    ${(props) => props.styles};
`;

export default H2;
