/**
 * Module contains H3 header component
 * @module ui/elements/H3
 * @author Igor Ivanov
 */
import styled, { CSSProp } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';

type H3Props = PartialAndNullable<{
    styles?: CSSProp
}>;

const H3 = styled.h3<H3Props>`
    font-size: 1.4rem;
    margin-bottom: 0.25rem;
    ${(props) => props.styles};
`;

export default H3;
