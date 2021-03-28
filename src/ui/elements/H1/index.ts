/**
 * Module contains H1 header component
 * @module ui/elements/H1
 * @author Igor Ivanov
 */
import styled, { CSSProp } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { colorSecondary } from '../../styles/theme/colors';

type H1Props = PartialAndNullable<{
    styles?: CSSProp
}>;

const H1 = styled.h1<H1Props>`
    color: ${colorSecondary};
    font-size: 2rem;
    margin-bottom: 0.25rem;
    ${(props) => props.styles};
`;

export default H1;
