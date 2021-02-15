/**
 * Module contains global application types.
 * @module types/global
 */
import * as H from 'history';
import type {} from 'styled-components/cssprop';
// eslint-disable-next-line import/named
import { CSSProp } from 'styled-components';

import { RunningMode } from '../config';

interface MyTheme {
    variant: string
}

declare global {
    /**
     * Defines current running mode.
     * @type {string}
     */
    const CONFIG: RunningMode;

    // eslint-disable-next-line @typescript-eslint/ban-types
    type JSX = {};

    namespace JSX {}

    interface Location extends H.Location {
        path: string;
    }
}

declare module 'react' {
    interface Attributes {
        css?: CSSProp<MyTheme | any>
    }
}
