/**
 * Module contains additional styles used in locale switcher
 * @module components/LocaleSwitch/ButtonStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { styleMixins } from '../../styles/mixins';
import { lightText } from '../../styles/theme/typography';

const ButtonStyles = css`
    border-radius: 50%;
    bottom: 1rem;
    color: ${lightText};
    flex-direction: column;
    height: 2.25rem;
    justify-content: center;
    margin: 0.5rem;
    ${styleMixins.vertAlignFlex()};
    ${styleMixins.focusBoxShadow()};
    padding: 0;
    right: 1rem;
    width: 2.25rem;

    i {
        margin: auto;
    }
`;

export default ButtonStyles;
