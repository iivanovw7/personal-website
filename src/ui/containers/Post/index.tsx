/**
 * Module contains post main component.
 * @module ui/containers/Post
 */
import { useQuery } from '@apollo/client';
import { compose } from '@reduxjs/toolkit';
import { always, cond, pipe, prop, T } from 'ramda';
import React, { memo } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { getText } from '../../../locale';
import { GET_POST } from '../../../service/graphcms/queries/posts';
import { runCodePrettify } from '../../../utils/codePrettify';
import { isNilOrEmpty } from '../../../utils/helpers';
import { getLastItem } from '../../../utils/string';
import ErrorMessage from '../../components/ErrorMessage';
import TagCloud from '../../components/TagCloud';
import Paragraph from '../../elements/Paragraph';
import Spinner from '../../elements/Spinner';
import { isPostsAreaPath } from '../../routes';
import commonMessages from '../App/model/messages';
import { makeSelectLocation } from '../App/model/selectors';

import Article from './Article';
import Box from './Box';
import formattedPostTex from './model/util';

const { noResults } = commonMessages;

export interface Post {
    tags: string[];
    content: {
        html: string;
    }
}

export interface PostProps {
    location: Location;
}

/**
 * Creates Post component.
 * @param {PostProps} props - contains component props.
 * @method
 * @return {ReactNode} Post component.
 * @constructor
 */
const PostComponent: React.FC<PostProps> = (props: PostProps) => {
    const { location: currentLocation } = props;
    const { pathname } = currentLocation;
    const isPostsPath = isPostsAreaPath(pathname);
    const postId = getLastItem(pathname);
    const localizedText = (message) => getText(message, props) as string;

    // https://github.com/apollographql/apollo-client/issues/6209
    const { data, loading, error } = useQuery(GET_POST, {
        variables: { postId },
        fetchPolicy: 'cache-and-network',
        skip: ! isPostsPath
    });

    const Content = cond([
        [prop('error'), always(<ErrorMessage />)],
        [prop('loading'), always(<Spinner />)],
        [pipe(prop('post'), isNilOrEmpty), always(<p>{localizedText(noResults)}</p>)],
        // eslint-disable-next-line react/no-unused-prop-types
        [T, ({ post }: { post: Post }) => {
            runCodePrettify();

            return (
                <Box>
                    <TagCloud tags={post.tags} />
                    <Paragraph dangerouslySetInnerHTML={{ __html: formattedPostTex(post.content.html) }} />
                </Box>
            );
        }],
    ]);

    return isPostsPath
        ? (
            <Article error={error}>
                <Content
                    error={error}
                    loading={loading}
                    post={data
                        ? data.post
                        : null} />
            </Article>
        )
        : <ErrorMessage />;
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

export default compose(withConnect, injectIntl, memo)(PostComponent);
