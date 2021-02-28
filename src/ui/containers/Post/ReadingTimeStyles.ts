/**
 * Module contains additional styles used in `estimated reading time` text block.
 * @module containers/Post/ReadingTimeStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import CreatedAtStyles from './CreatedAtStyles';

const ReadingTimeStyles = css`
    margin-top: 0.225rem;
    ${CreatedAtStyles};
`;

export default ReadingTimeStyles;
