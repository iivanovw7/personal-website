/**
 * Module contains additional styles used in search input.
 * @module components/Search/SearchStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { styleMixins } from '../../styles/mixins';
import { inputBackground, inputBorderColor, inputBorderFocusColor } from '../../styles/theme/inputs';

export const Label = css`
    display: block;
    max-width: 20rem;
    padding-right: 1.78rem;
    position: relative;
`;

/* stylelint-disable property-no-vendor-prefix */

export const Input = css`
    /**
      * 1. Remove webkit redesign of searches
      *
      * 2. Remove inner padding & search cancel button in Safari & Chrome on
      *    OS X. Safari (but not Chrome) clips the cancel button when the
      *    search input has padding (& \`textfield\` appearance).
    */

    -webkit-appearance: none; /* 1 */

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button {
        -webkit-appearance: none; /* 2 */
        appearance: none;
    }

    border: 0;
    ${styleMixins.focusBoxShadow(
        '2px',
        inputBorderColor,
        inputBorderFocusColor
    )};
    padding: 0.5rem;
    width: 100%;

    &:disabled {
        background: ${inputBackground};
        cursor: not-allowed;
        opacity: 0.5;
    }

    @media screen and (-ms-high-contrast: active) {
        border: 1px solid;
        position: relative;

        &:focus {
            border: 1px solid;
        }

        &:disabled {
            opacity: 0.5;
        }
    }
`;

/* stylelint-enable property-no-vendor-prefix */

