/**
 * Module contains tag cloud component.
 * @module ui/components/TagCloud
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import { always, map } from 'ramda';
import React, { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Container from './Container';
import TagButton from './TagButton';

/**
 * Creates tag cloud component.
 * @method
 * @param {Object.<module:ui/components/TagCloud~propTypes>} props
 *  contains component props
 *  @see {@link module:ui/components/TagCloud~propTypes}
 * @return {JSX.Element} React component with children.
 * @constructor
 */
function TagCloud(props) {
    const { tags } = props;

    /**
     * Creates single tag button component.
     * @param {string} text - tag text.
     * @return {JSX.Element} returns tag button element.
     */
    const TagButtonElement = (text) => <TagButton key={uuidv4()} text={text} />;

    const TagButtons = always(map(TagButtonElement, tags));

    return (
        <Container>
            <TagButtons />
        </Container>
    );
}

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {Array.<string>} [props.tags = []] - list of tag strings.
 * @return {Array} React propTypes.
 */
TagCloud.propTypes = {
    tags: PropTypes.array,
};

TagCloud.defaultProps = {
    tags: [],
};

export default memo(TagCloud);
