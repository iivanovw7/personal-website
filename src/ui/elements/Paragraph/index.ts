/**
 * Module contains paragraph component
 * @module ui/elements/Paragraph
 * @author Igor Ivanov
 */
import styled, { CSSProp } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { textColor } from '../../styles/theme/typography';

type ParagraphProps = PartialAndNullable<{
    styling?: CSSProp
}>;

const Paragraph = styled.p<ParagraphProps>`
    color: ${textColor};
    ${(props) => props.styling};
    width: 100%
`;

export default Paragraph;
