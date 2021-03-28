/**
 * Module contains H6 header component
 * @module ui/elements/H6
 * @author Igor Ivanov
 */
import styled, { CSSProp } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { typography } from '../../styles/settings';

type H6Props = PartialAndNullable<{
    styles?: CSSProp
}>;

const H6 = styled.h6<H6Props>`
    font-size: ${typography.h6}rem;
    margin-bottom: 0.24rem;
    margin-top: 1.12rem;
    ${(props) => props.styles};
`;

export default H6;
