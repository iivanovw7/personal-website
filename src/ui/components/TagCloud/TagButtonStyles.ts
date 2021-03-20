/**
 * Module contains additional styles used in tag buttons.
 * @module components/TagCloud/TagButtonStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { styleMixins } from '../../styles/mixins';

const TAG_FONTSIZE = 0.88;

const TagButtonStyles = css`
    border-radius: 0.32rem;
    margin: 0.25rem 0.32rem 0.25rem 0;
    ${styleMixins.fontSize(TAG_FONTSIZE)};
    ${styleMixins.focusBoxShadow()};
    padding: 0.34rem;
    transition: transform 0.2s;

    &:hover,
    &:focus {
        transform: translateY(-0.3rem);
    }
`;

export default TagButtonStyles;
