/**
 * Module contains posts main component.
 * @module ui/containers/Posts
 */
import { useQuery } from '@apollo/client';
import { compose } from '@reduxjs/toolkit';
import { always, T, prop, cond, pipe } from 'ramda';
import React, { FC, memo } from 'react';
import { injectIntl, IntlShape } from 'react-intl';
import { connect } from 'react-redux';

import { GetPostsDocument, Post } from '../../../generated/graphcms-schema';
import { getText } from '../../../locale';
import { isNilOrEmpty } from '../../../utils/helpers';
import ErrorMessage from '../../components/ErrorMessage';
import Spinner from '../../elements/Spinner';
import commonMessages from '../App/model/messages';
import { makeSelectLocation } from '../App/model/selectors';

import Article from './Article';
import Grid from './Grid';

const { noResults } = commonMessages;

const defaultSkip = 0;
const defaultFirst = 48;

export interface IPosts {
    posts: Post[]
}

export interface IPostsProps {
    /** [first = defaultFirst] Max number of posts to be returned after one data fetch. */
    first: number;
    /** `react-intl` object provides access  to localization methods. */
    intl: IntlShape;
    /** Object represents router `location` */
    location: Location;
    /** [skip = defaultSkip] Number of posts to be skipped during query. */
    skip: number;
}

const PostsComponent: FC<IPostsProps> = (props: IPostsProps) => {
    const { skip = defaultSkip, first = defaultFirst } = props;
    const localizedText = (message) => getText(message, props) as string;

    // https://github.com/apollographql/apollo-client/issues/6209
    const { data, loading, error } = useQuery(GetPostsDocument, {
        variables: { skip, first },
        fetchPolicy: 'cache-and-network',
    });

    const Content = cond([
        [prop('error'), always(<ErrorMessage />)],
        [prop('loading'), always(<Spinner />)],
        [pipe(prop('posts'), isNilOrEmpty), always(<p>{localizedText(noResults)}</p>)],
        // @ts-ignore TODO: Migrate <Grid /> to TS
        [T, ({ posts }: IPosts) => <Grid posts={posts} />],
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

export default compose(withConnect, injectIntl, memo)(PostsComponent);

