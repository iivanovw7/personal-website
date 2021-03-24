/**
 * Module contains posts main component.
 * @module ui/containers/Posts
 */
import { useQuery } from '@apollo/client';
import { compose } from '@reduxjs/toolkit';
import { always, cond, pipe, prop, T } from 'ramda';
import React, { Dispatch, memo, ReactElement, SyntheticEvent } from 'react';
import { injectIntl, IntlShape } from 'react-intl';
import { connect } from 'react-redux';

import {
    GetPostByTextDocument,
    GetPostsByTagDocument,
    GetPostsDocument,
    Post,
} from '../../../generated/graphcms-schema';
import { getText } from '../../../locale';
import { isNilOrEmpty } from '../../../utils/helpers';
import ErrorMessage from '../../components/ErrorMessage';
import Paragraph from '../../components/ErrorMessage/Paragraph';
import Search from '../../components/Search';
import TagButton from '../../components/TagCloud/TagButton';
import Collapse from '../../elements/Collapse';
import Separator, { ContentStyling } from '../../elements/Separator';
import Spinner from '../../elements/Spinner';
import commonMessages from '../App/model/messages';
import { selectLocation } from '../App/model/selectors';

import Article from './Article';
import Grid from './Grid/Loadable';
import Header, { HeaderTagStyles, HeaderCollapseStyles } from './Header';
import { setTags, TSetTags } from './model';
import postsMessages from './model/messages';
import { makeSelectPostsSearchText, makeSelectPostsTags } from './model/selectors';

const { noResults } = commonMessages;
const { searchByTags, searchBySubject } = postsMessages;

const defaultSkip = 0;
const defaultFirst = 48;

export interface IPosts {
    posts: Post[],
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
    /** Lists of tags used in posts filter. */
    tags: string[];
    /** tag click handler, sets tag name as posts filter condition. */
    onTagClick: (tag?: string) => void;
    /** Posts search text. */
    search: string;
}

interface IDispatchProps extends Pick<IPostsProps, 'onTagClick'> {
    /** Dispatches action. */
    dispatch: Dispatch<TSetTags>;
}

/* eslint-disable arrow-body-style */

/**
 * Defines which query to use depending on passes `props` object.
 * @param {IPostsProps} props - component props.
 * @return {Object} returns object with query and additional parameters.
 */
const getQuery = cond([
    [prop('tags'), (props: IPostsProps) => ({ type: GetPostsByTagDocument, params: { tags: props.tags } })],
    [prop('search'), (props: IPostsProps) => ({ type: GetPostByTextDocument, params: { text: props.search } })],
    [T, always({ type: GetPostsDocument })],
]);

/* eslint-enable arrow-body-style */

/**
 * Creates Posts component.
 * @param {IPostsProps} props - contains component props.
 * @method
 * @return {ReactNode} Posts component.
 * @constructor
 */
function PostsComponent(props: IPostsProps): ReactElement {
    const { skip = defaultSkip, first = defaultFirst, tags, onTagClick } = props;
    const localizedText = (message) => getText(message, props) as string;
    const hasTags = Boolean(tags.length);
    const postsQuery = getQuery(props);

    // https://github.com/apollographql/apollo-client/issues/6209
    const { data, loading, error } = useQuery(postsQuery.type, {
        variables: { skip, first, ...postsQuery.params },
        fetchPolicy: 'cache-and-network',
    });

    const Content = cond([
        [prop('error'), always(<ErrorMessage />)],
        [prop('loading'), always(<Spinner />)],
        [pipe(prop('posts'), isNilOrEmpty), always(
            <Paragraph>{ localizedText(noResults) }</Paragraph>
        )],
        [T, ({ posts }: IPosts) => <Grid posts={ posts } />],
    ]);

    /**
     * Handles click on active tags filter element.
     * TODO: Later `tags` filter should operate multiple values and it should remove tags by clicking on them.
     * @param {Event | SyntheticEvent} eventData - object represents event data.
     */
    function handleTagClick(eventData: SyntheticEvent) {
        eventData.preventDefault();
        onTagClick();
    }

    return (
        <Article error={ error }>
            <Header>
                <Collapse isOpen={ hasTags } styling={ HeaderCollapseStyles } >
                    { localizedText(searchByTags) }
                    { hasTags && (
                        <TagButton text={ tags[0] } onClick={ handleTagClick } styling={ HeaderTagStyles } />
                    ) }
                </Collapse>
                <Search id="pw-posts-search" label={localizedText(searchBySubject)} />
            </Header>
            <Separator styling={ContentStyling} />
            <Content
                error={ error }
                loading={ loading }
                posts={ data
                    ? data.posts
                    : null } />
        </Article>
    );
}

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
        location: selectLocation(state),
        tags: makeSelectPostsTags(state),
        search: makeSelectPostsSearchText(state),
    };
};

/**
 * Function mapping dispatch to props.
 * Dispatching action which may cause change of application state.
 * @func mapDispatchToProps
 * @param {Function} dispatch method.
 * @return {Object} redux container
 */
export function mapDispatchToProps(dispatch: Dispatch<TSetTags>): IDispatchProps {
    return {
        onTagClick: (tag?: string) => {
            dispatch(setTags(tag
                ? [tag]
                : [])
            );
        },
        dispatch,
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, injectIntl, memo)(PostsComponent);

