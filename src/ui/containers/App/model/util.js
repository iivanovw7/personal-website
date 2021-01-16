/**
 * Module contains main application utils
 * @module ui/containers/App/model/util
 */

/**
 * Removes loading screen.
 */
export function hideWaitScreen() {
    const waitScreen = document.querySelector('.pw-preloader');

    if (waitScreen && !waitScreen.classList.contains('pw-preloader-hidden')) {
        waitScreen.classList.add('pw-preloader-hidden');
    }
}

/**
 * Display loading screen.
 */
export function showWaitScreen() {
    const waitScreen = document.querySelector('.pw-preloader');

    if (waitScreen && waitScreen.classList.contains('pw-preloader-hidden')) {
        waitScreen.classList.remove('pw-preloader-hidden');
    }
}
