/**
 * Module contains posts list component.
 * @module ui/containers/Posts/Grid
 */
import * as PropTypes from 'prop-types';
import React, { useRef, memo } from 'react';

import H6 from '../../../elements/H6';

import Bar from './Bar';
import Button from '../../../elements/Button';
import Cell from './Cell';
import Container from './Container';
import TagCloud from '../../../components/TagCloud';

/**
 * Creates Posts List component.
 * @method
 * @param {Object.<module:ui/containers/Posts/Grid~propTypes>} props
 *  contains component props
 *  @see {@link module:ui/containers/Posts/Grid~propTypes}
 * @return {JSX.Element} React component with children.
 * @constructor
 */
function Grid(props) {
    const { hasMore, posts } = props;
    const listRef = useRef(null);

    return (
        <Container ref={listRef} hasMore={hasMore}>
            {posts.map((post) => (
                <Cell key={post.id}>
                    <H6>{post.title}</H6>
                    <p>{post.subject}</p>
                    <Bar>
                        <TagCloud tags={post.tags} />
                        <Button href="/">
                            <i className="material-icons">read_more</i>
                        </Button>
                    </Bar>
                </Cell>
            ))}
        </Container>
    );
}

/**
 * @name Grid.propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {boolean} [props.hasMore = false] - `true` if there are new posts to load and `else` otherwise.
 * @property {Array.<Object>} [props.posts = []] - list of posts to show.
 * @return {Array} React propTypes
 */
Grid.propTypes = {
    hasMore: PropTypes.bool,
    posts: PropTypes.array,
};

Grid.defaultProps = {
    hasMore: false,
    posts: [],
};

export default memo(Grid);
