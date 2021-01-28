/**
 * Module contains global application types.
 * @module types/global
 */

import * as H from 'history';

import { RunningMode } from '../config';

/* eslint-disable no-unused-vars */

declare global {
    /**
     * Defines current running mode.
     * @type {string}
     */
    const CONFIG: RunningMode;

    type JSX = {};

    namespace JSX {}

    interface Location extends H.Location {
        path: string;
    }
}

/* eslint-enable no-unused-vars */
