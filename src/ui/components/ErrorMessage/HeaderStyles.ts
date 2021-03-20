/**
 * Module contains error message component header additional styles.
 * @module ui/components/ErrorMessage/HeaderStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { mediaKey, respondToMedia } from '../../styles/mixins';

const HeaderStyles = css`
    margin-top: 1.571rem;
    ${respondToMedia[mediaKey('lg')]`
        margin-top: 2.286rem;
    )};`};
`;

export default HeaderStyles;
