/**
 * Module contains application locale image component.
 * @module components/LocaleSwitch/LocaleImage
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React from 'react';

import Img from '../../elements/Img';

import ImageStyles from './ImageStyles';

/**
 * Creates LocaleImage component.
 * @name LocaleSwitch/LocaleImage
 * @method
 *
 * @param {Object.<module:components/LocaleSwitch/LocaleImage~propTypes>} props
 *  contains component props
 *  @see {@link module:components/LocaleSwitch/LocaleImage~propTypes}
 * @return {JSX.Element} React component with children.
 * @constructor
 */
const LocaleImage = ({ image, alt }) => <Img src={image} alt={alt} styling={ImageStyles} />;

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} image - src link.
 * @property {LocaleImage} alt - alt text string.
 * @return {Array} React propTypes
 */
LocaleImage.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.func.isRequired,
};

export default LocaleImage;
