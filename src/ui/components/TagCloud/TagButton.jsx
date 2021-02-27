/**
 * Module contains tag cloud component.
 * @module ui/components/TagCloud/TagButton
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React, { memo } from 'react';
import { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../elements/Button';
import { colorSet } from '../../styles/settings';

import TagButtonStyles from './TagButtonStyles';

/**
 * Defines tag button color depending on word length.
 * @param {string} [key = ''] - string represents tag name.
 * @return {*|number} returns color index from colors pallet.
 *      @see {@link module:config/styles~colorSet.tagBtnBgColors}
 */
export function setColorIndex(key = '') {
    const { length: keyLength } = key;

    return keyLength <= colorSet.tagBtnBgColors.length
        ? keyLength
        : 7;
}

/**
 * Creates tag button component.
 * @method
 * @param {Object.<module:ui/components/TagCloud/TagButton~propTypes>} props
 *  contains component props
 *  @see {@link module:ui/components/TagCloud/TagButton~propTypes}
 * @return {JSX.Element} React component with children.
 * @constructor
 */
function TagButton(props) {
    const { text } = props;
    const colorIndex = setColorIndex(text);

    const Styles = css`
        background-color: ${colorSet.tagBtnBgColors[colorIndex]};
        border: 1px solid ${colorSet.tagBtnTextColors[colorIndex]};
        color: ${colorSet.tagBtnTextColors[colorIndex]};
        ${TagButtonStyles};
    `;

    return (
        <Button variant="primary" styling={Styles} key={uuidv4()} href={`/search/${text}`} target="_self">
            {text}
        </Button>
    );
}

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} props.text - tag text string.
 * @return {Array} React propTypes.
 */
TagButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default memo(TagButton);
