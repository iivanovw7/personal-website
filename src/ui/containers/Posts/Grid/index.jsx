/**
 * Module contains posts list component.
 * @module ui/containers/Posts/Grid
 */
import { compose } from '@reduxjs/toolkit';
import * as PropTypes from 'prop-types';
import React, { useRef, memo } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { getText } from '../../../../locale';
import TagCloud from '../../../components/TagCloud';
import H6 from '../../../elements/H6';
import NavLink from '../../../elements/NavLink';
import { routes as routesPaths } from '../../../routes';
import { makeSelectLocation } from '../../App/model/selectors';

import Bar from './Bar';
import Cell from './Cell';
import Container from './Container';

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
    const { hasMore, posts, location } = props;
    const listRef = useRef(null);

    return (
        <Container ref={listRef} hasMore={hasMore}>
            {posts.map((post) => (
                <Cell key={post.id}>
                    <H6>{post.title}</H6>
                    <p>{post.subject}</p>
                    <Bar>
                        <TagCloud tags={post.tags} />
                        <NavLink
                            variant="secondary"
                            exact={false}
                            location={location}
                            link={`${routesPaths.posts}/${post.id}`}
                            icon="read_more"
                            text={getText('read_more', props)}
                        />
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
 * @property {object} props.location - object represents router `location`.
 * @property {boolean} [props.hasMore = false] - `true` if there are new posts to load and `else` otherwise.
 * @property {Array.<Object>} [props.posts = []] - list of posts to show.
 * @return {Array} React propTypes
 */
Grid.propTypes = {
    location: PropTypes.object.isRequired,
    hasMore: PropTypes.bool,
    posts: PropTypes.array,
};

Grid.defaultProps = {
    hasMore: false,
    posts: [],
};

/**
 * Function selects parts of the state required in component.
 * @method
 * @param {Object} state
 *    Object contains application state.
 * @see {@link module:containers/App/model/selectors}
 * @return {Function} selector
 */
const mapStateToProps = (state) => {
    const { location } = makeSelectLocation(state);

    return {
        location,
    };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect, injectIntl, memo)(Grid);
