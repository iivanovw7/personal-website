/**
 * Module contains error message text paragraph.
 * @module ui/components/ErrorMessage/Paragraph
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { mediaKey, respondToMedia, styleMixins } from '../../styles/mixins';

// prettier-ignore
const Paragraph = styled.p`
    margin-bottom: 0.857rem;
    ${respondToMedia[mediaKey('lg')]`
        ${styleMixins.fontSize(1.429, 1.929)};
        ${styleMixins.fluidWidth('32.429rem')};
        padding: 0 2.286rem;
    )};`};
    padding: 0;
    position: relative;
    text-align: center;
`;

export default Paragraph;
