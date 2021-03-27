/**
 * Module contains application global style properties
 * @module ui/client/style/globals
 */
import { createGlobalStyle } from 'styled-components';

import datesFont from '../../../assets/fonts/inconsolata.woff';
import baseFontPrimary from '../../../assets/fonts/Nunito-Regular.ttf';
import baseFontBackup from '../../../assets/fonts/Nunito-Regular.woff';

import { styleMixins } from './mixins';
import { breakpoints, typography } from './settings';
import { colorPrimary } from './theme/colors';

const { baseFontFamily, datesFontFamily } = typography;

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: ${ baseFontFamily };
        font-style: normal;
        font-weight: 300;
        src: local(${ baseFontFamily }),
        url(${ baseFontPrimary }) format('ttf'),
        url(${ baseFontBackup }) format('woff'),
        url('https://fonts.googleapis.com/css?family=Nunito+Sans');
    }

    @font-face {
        font-family: ${ datesFontFamily };
        src: local(${ datesFont }),
        url('https://fonts.googleapis.com/css?family=Inconsolata');
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    html {
        ${ styleMixins.scrollbars(6, colorPrimary) };
        overflow-y: scroll;
    }

    body {
        font-family: ${ baseFontFamily }, Fallback, sans-serif;
    }

    .dates,
    .code {
        font-family: ${ datesFontFamily }, Fallback, sans-serif;
    }

    .prettyprint {
        font-size: .7em;
    }

    #pw-portal__scroll-top-id {
        bottom: 1rem;
        position: fixed;
        right: 1rem;
    }

    @media screen and (min-width: ${ breakpoints.md }px) {
        .adaptive-fonts {
            font-size: calc(11px + .5vw);
        }
    }

    @media screen and (max-width: ${ breakpoints.sm }px) {
        .adaptive-fonts {
            font-size: calc(10px + .5vw);
        }
    }
`;

export default GlobalStyle;
