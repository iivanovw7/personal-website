/**
 * Module contains additional styles used in tag buttons.
 * @module components/TagCloud/TagButtonStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { styleMixins } from '../../styles/mixins';
import { typography } from '../../styles/settings';
import { textColor } from '../../styles/theme/typography';

const TagButtonStyles = css`
    border: none;
    border-radius: 0.16rem;
    margin: 0.32rem 0.64rem 0.32rem 0;
    ${styleMixins.fontSize(typography.small)};
    ${styleMixins.focusOutline(textColor, textColor, '0.24rem')};
    padding: 0.34rem;

    &:hover {
        text-decoration: underline;
    }
`;

export default TagButtonStyles;
