/**
 * Module contains additional styles used in logo image.
 * @module ui/components/TopBar/SocialButtonStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { styleMixins } from '../../styles/mixins';
import { btnBackground, btnLighten } from '../../styles/theme/buttons';

const SocialButtonStyles = css`
    color: ${btnBackground};
    margin: 0.3em 0.3em 0.3em 0.6em;
    padding: 0.2rem;
    ${/* sc-custom */ styleMixins.focusBoxShadow()};

    &:hover {
        color: ${btnLighten};
    }
`;

export default SocialButtonStyles;
