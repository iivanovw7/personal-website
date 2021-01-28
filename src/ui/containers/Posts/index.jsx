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

import { getText } from '../../../locale';
import { GET_POSTS } from '../../../service/graphcms/queries/posts';
import { isNilOrEmpty } from '../../../utils/helpers';
import ErrorMessage from '../../components/ErrorMessage';
import Spinner from '../../elements/Spinner';
import commonMessages from '../App/model/messages';

import Article from './Article';
import Grid from './Grid';

const { noResults } = commonMessages;

const Posts = (props) => {
    const { skip, first } = props;
    const [skipped, setSkipped] = useState(skip);
    const localizedText = (message) => getText(message, props);
    const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
        variables: { skip, first },
        fetchPolicy: 'cache-and-network',
    });

    /**
     * Triggers fetching additional results and updating current query results
     * @param {number} skipRecords - results to be skipped
     * @param {number} queryLimit - number of results to be fetched
     * @return {Function} trigger more posts handler.
     */
    function triggerFetchMore(skipRecords, queryLimit) {
        return fetchMore({
            variables: { skip: skipRecords, first: queryLimit },
            updateQuery: (previousResult = {}, { fetchMoreResult }) => {
                if (!fetchMoreResult || skipped === skipRecords) return previousResult;

                const previousEntries = previousResult.posts;
                const newEntries = fetchMoreResult.posts;
                setSkipped(skipRecords);

                return {
                    ...previousResult,
                    posts: {
                        ...fetchMoreResult.posts,
                        posts: [...previousEntries, ...newEntries],
                    },
                };
            },
        });
    }

    const Content = cond([
        // eslint-disable-next-line max-len
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
 * @property {Object} [props.first = 24] - max number of posts to be returned after one data fetch.
 * @return {Array} React propTypes
 */
Posts.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    intl: PropTypes.object.isRequired,
    skip: PropTypes.number,
    first: PropTypes.number,
};

Posts.defaultProps = {
    skip: 0,
    first: 24,
};

export default compose(injectIntl, memo)(Posts);
