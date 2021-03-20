/**
 * Module contains additional styles used in `created at` text block.
 * @module containers/Post/CreatedAtStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { styleMixins } from '../../styles/mixins';
import { typography } from '../../styles/settings';
import { mainBgInverse } from '../../styles/theme/background';
import { textColorInverse } from '../../styles/theme/typography';

const { datesFontFamily } = typography;

const CreatedAtStyles = css`
    margin-bottom: 0.225rem;
    ${styleMixins.fontFamily(datesFontFamily)};

    span {
        ${styleMixins.emphasizedText(textColorInverse, mainBgInverse)}
    }
`;

export default CreatedAtStyles;
