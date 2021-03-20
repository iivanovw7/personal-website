/**
 * Module contains constants related to localization.
 * @module ui/components/LocaleProvider/model/constants
 * @author Igor Ivanov
 */

import Eng from '../../../../../assets/svg/locale/eng.svg';
import Rus from '../../../../../assets/svg/locale/rus.svg';
import config from '../../../../config';

interface LocaleResources {
    en: {
        alt: string,
        image: SVGSVGElement
    },
    ru: {
        alt: string,
        image: SVGSVGElement
    }
}

/**
 * Locale list element description.
 * @typedef {object} module:ui/components/LocaleProvider/model/constants~localeListElement
 * @property {String} locale - current locale.
 * @property {String} image - locale image component.
 * @property {String} alt - locale label or alt text.
 */

/**
 * Object contains locales with description and link images.
 * @constant {Object}
 * @see {@link module:components/LocaleProvider/model/constants~localeListElement}
 */
export const LOCALE_RESOURCES: LocaleResources = {
    en: {
        alt: 'ENG',
        image: Eng,
    },
    ru: {
        alt: 'RUS',
        image: Rus,
    },
};

/**
 * Default locale.
 * @constant {string}
 */
export const DEFAULT_LOCALE = config.locale;
