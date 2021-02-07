/**
 * Module contains paragraph component
 * @module ui/elements/Paragraph
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { textColor } from '../../styles/theme/typography';

const Paragraph = styled.p`
    color: ${textColor};
    width: 100%;
`;

export default Paragraph;
