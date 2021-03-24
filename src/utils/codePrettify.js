/**
 * Module contains google code prettify tools.
 * @module utils/codePrettify
 */

import config from '../config';

/**
 * Prettifies code samples.
 */
export function runCodePrettify() {
    const script = document.createElement('script');
    const head = document.getElementsByTagName('head')[0];
    const body = document.getElementsByTagName('body')[0];

    script.type = 'text/javascript';
    script.async = true;

    script.src = config.net.codePrettifyUrl;
    (head || body).appendChild(script);
}
