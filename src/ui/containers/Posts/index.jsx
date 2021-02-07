/**
 * Module contains posts main component.
 * @module ui/containers/Posts
 */
import { useQuery } from '@apollo/client';
import { compose } from '@reduxjs/toolkit';
import * as PropTypes from 'prop-types';
import { always, T, prop, cond, pipe } from 'ramda';
import React, { memo, useState } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { getText } from '../../../locale';
import { GET_POSTS } from '../../../service/graphcms/queries/posts';
import { isNilOrEmpty } from '../../../utils/helpers';
import ErrorMessage from '../../components/ErrorMessage';
import Spinner from '../../elements/Spinner';
import commonMessages from '../App/model/messages';
import { makeSelectLocation } from '../App/model/selectors';

import Article from './Article';
import Grid from './Grid';

const { noResults } = commonMessages;

const Posts = (props) => {
    const { skip, first } = props;
    // eslint-disable-next-line no-unused-vars
    const [skipped, setSkipped] = useState(skip);
    const localizedText = (message) => getText(message, props);

    // https://github.com/apollographql/apollo-client/issues/6209
    const { data, loading, error } = useQuery(GET_POSTS, {
        variables: { skip, first },
        fetchPolicy: 'cache-and-network',
    });

    const Content = cond([
        [prop('error'), always(<ErrorMessage />)],
        [prop('loading'), always(<Spinner />)],
        [pipe(prop('posts'), isNilOrEmpty), always(<p>{localizedText(noResults)}</p>)],
        [T, ({ posts }) => <Grid posts={posts} />],
    ]);

    // prettier-ignore
    return (
        <Article error={error}>
            <Content
                error={error}
                loading={loading}
                posts={data
                    ? data.posts
                    : null} />
        </Article>
    );
};

/**
 * @name Posts.propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {Object} props.intl - react-intl object provides access  to localization methods.
 * @property {Object} [props.skip = 0] - number of posts to be skipped during query.
 * @property {Object} [props.first = 48] - max number of posts to be returned after one data fetch.
 * @return {Array} React propTypes
 */
Posts.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    intl: PropTypes.object.isRequired,
    first: PropTypes.number,
    skip: PropTypes.number,
};

Posts.defaultProps = {
    first: 48,
    skip: 0,
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
    return {
        location: makeSelectLocation(state),
    };
};

const withConnect = connect(mapStateToProps);

export default compose(withConnect, injectIntl, memo)(Posts);
