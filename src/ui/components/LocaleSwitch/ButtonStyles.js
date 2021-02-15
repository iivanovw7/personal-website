/**
 * Module contains additional styles used in locale switcher
 * @module components/LocaleSwitch/ButtonStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { styleMixins } from '../../styles/mixins';
import { btnBackground } from '../../styles/theme/buttons';

const ButtonStyles = css`
    background: transparent;
    color: ${btnBackground};
    display: flex;
    margin: 0.5rem;
    padding: 0.34rem;
    width: 2.6rem;

    ${/* sc-custom */ styleMixins.focusBoxShadow()};
`;

export default ButtonStyles;
