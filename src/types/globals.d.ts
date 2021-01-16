/**
 * Module contains global application types.
 * @module types/global
 */

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
}

/* eslint-enable no-unused-vars */
