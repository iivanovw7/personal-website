/**
 * Module contains posts main component.
 * @module ui/containers/Posts
 */
import { useQuery } from '@apollo/client';
import * as PropTypes from 'prop-types';
import { always, T, prop, cond, pipe } from 'ramda';
import React, { memo, useState } from 'react';

import { GET_POSTS } from '../../../service/graphcms/queries/posts';
import { isNilOrEmpty } from '../../../utils/helpers';
import Spinner from '../../elements/Spinner';

import Article from './Article';
import Grid from './Grid';

const Posts = (props) => {
    const { skip, first } = props;
    const [skipped, setSkipped] = useState(skip);
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
        [prop('error'), always(<p>Error</p>)],
        [prop('loading'), always(<Spinner />)],
        [pipe(prop('posts'), isNilOrEmpty), always(<p>No results</p>)],
        [T, ({ posts }) => <Grid posts={posts} />],
    ]);

    // prettier-ignore
    return (
        <Article>
            <Content
                error={error}
                loading={loading}
                posts={data
                    ? data.posts
                    : null} />
        </Article>
    );
};

Posts.propTypes = {
    skip: PropTypes.number,
    first: PropTypes.number,
};

Posts.defaultProps = {
    skip: 0,
    first: 24,
};

export default memo(Posts);
