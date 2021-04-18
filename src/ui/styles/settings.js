/**
 * Module contains application styles and theming configuration.
 * @module ui/config/styles
 */

/**
 * Base application styles configuration.
 * Same set is equal for dark and light themes.
 * @typedef {Object} module:ui/config/styles~base
 * @property {number} topBarHeight - application top bar height in `rem`;
 * @property {number} headerHeight - application header height in `rem`;
 * @property {number} footerHeight - application footer height in `rem`;
 * @property {Array.<string>} zIndexes - list of element for which zIndexes are going to be generated.
 * @property {number} zIndex - start zIndex value.
 */

/**
 * Base application styles configuration.
 * @type {module:ui/config/styles~base}
 */
export const base = {
    topBarHeight: 3.7,
    headerHeight: 5,
    footerHeight: 0.3,
    zIndexes: [
        'Ripples',
        'ThemeSwitchContainer',
        'ThemeSwitchHandle',
        'TopBar',
        'Header',
        'Footer',
        'Separator',
        'CarouselProgress',
        'Carousel',
        'CarouselArrows',
        'CarouselRating',
        'Loader'
    ],
    zIndex: 500,
};

/**
 * Theme color description.
 * Same set is equal for dark and light themes.
 * @typedef {Object} module:config/styles~themeSet
 * @property {string} inputBackgroundPrimary
 * @property {string} inputColorPrimary
 * @property {string} colorPrimary
 * @property {string} colorSecondary
 * @property {Array.<string>} tagBtnBgColors
 * @property {Array.<string>} tagBtnTextColors
 * @property {string} colorAlert
 * @property {string} textColorPrimary
 * @property {string} mainBackgroundPrimary
 * @property {string} headerBackgroundPrimary
 * @property {string} linkHighlight
 * @property {string} linkColor
 */

/**
 * Application colors set.
 * Same set is equal for dark and light themes.
 * @typedef {Object} module:config/styles~colorSet
 * @property {Object} dark
 *  @see {@link module:ui/config/styles~themeSet}
 * @property {Object} light
 *  @see {@link module:ui/config/styles~themeSet}
 */

/**
 * Application color scheme set.
 * @type {Object}
 * @param {Object} gradients contains set of colors used in gradients.
 * @param {module:ui/config/styles~colorSet} dark
 * @param {module:ui/config/styles~colorSet} light
 */
export const colorSet = {
    gradients: {
        first: 'rgba(224, 0, 255, 1)',
        second: 'rgba(250, 241, 8, 1)',
        third: 'rgba(176, 14, 14, 1)',
    },
    tagBtnBgColors: [
        '#B565A7',
        '#2e37a3',
        '#b15f0f',
        '#6B5B95',
        '#191f32',
        '#01786a',
        '#6bb3fa',
        '#ecdb54',
        '#BC70A4',
        '#CE3175',
        '#F7786B',
        '#000000',
        '#95DEE3',
    ],
    tagBtnTextColors: [
        '#FFFAF0',
        '#FFFAF0',
        '#FFFAF0',
        '#FFFAF0',
        '#FFFAF0',
        '#FFFAF0',
        '#1e2227',
        '#1e2227',
        '#1e2227',
        '#FFFAF0',
        '#1e2227',
        '#FFFAF0',
        '#1e2227',
    ],
    dark: {
        inputBackgroundPrimary: '#fffaf0',
        inputColorPrimary: '#1e2227',
        colorPrimary: '#3d6fe2',
        colorSecondary: 'rgb(166,246,46)',
        colorAlert: 'rgb(234,53,53)',
        textColorPrimary: '#f0f8ff',
        textColorSecondary: '#1e2227',
        mainBackgroundPrimary: '#1e2227',
        headerBackgroundPrimary: '#242526',
        headerBackgroundSecondary: '#393b3d',
        linkHighlight: '#a8ecff',
        linkColor: 'rgba(99,198,255,0.95)',
    },
    light: {
        inputBackgroundPrimary: '#1e2227',
        inputColorPrimary: '#fffaf0',
        colorPrimary: '#0037b6',
        colorSecondary: 'rgb(96,160,0)',
        colorAlert: 'rgb(234,53,53)',
        textColorPrimary: '#1e2227',
        textColorSecondary: '#ffffff',
        mainBackgroundPrimary: '#d8d9de',
        headerBackgroundPrimary: '#f9f9fb',
        headerBackgroundSecondary: '#fffaf0',
        linkHighlight: '#a8ecff',
        linkColor: 'rgba(5,62,177,0.95)',
    },
    // Base colors palette: https://materialuicolors.co/
    baseColors: {
        grey100: '#F5F5F5',
        grey700: '#616161',
    },
};

/**
 * Application breakpoints set.
 * @typedef {Object} module:ui/config/styles~breakpoints
 * @property {number} xs
 * @property {number} sm
 * @property {number} md
 * @property {number} lg
 * @property {number} xl
 */

/**
 * Breakpoints in `px`.
 * @type {module:ui/config/styles~breakpoints}
 */
export const breakpoints = {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1920,
};

/**
 * Application typography set.
 * @typedef {Object} module:ui/config/styles~typography
 * @property {number} light
 * @property {number} regular
 * @property {number} bold
 * @property {string} baseFontFamily
 * @property {string} datesFontFamily
 * @property {number} small - small text size in `rem`.
 */

/**
 * Typography set.
 * @type {module:ui/config/styles~typography}
 */
export const typography = {
    light: 100,
    regular: 400,
    bold: 600,
    baseFontFamily: 'Nunito Sans, sans-serif',
    datesFontFamily: 'Inconsolata, monospace',
    small: 0.88,
    h6: 1.1,
};

/**
 * Application typography set.
 * @typedef {Object} module:ui/config/styles~timeouts
 * @property {number} fade
 * @property {number} transition
 * @property {number} delay
 * @property {number} duration
 */

/**
 * Timeouts.
 * @type {module:ui/config/styles~timeouts}
 */
export const timeouts = {
    fade: 500,
    transition: 0.4,
    delay: 1.5,
    duration: 3
};

/**
 * Application opacity rates set.
 * @typedef {Object} module:ui/config/styles~opacity
 * @property {number} mainBackground
 */

/**
 * Opacity rates.
 * @type {module:ui/config/styles~opacity}
 */
export const opacity = {
    mainBackground: 0.8,
    navLinkLight: 0.8,
    navLinkDark: 0.9,
};
