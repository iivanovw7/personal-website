/**
 * Module contains posts main component.
 * @module ui/containers/Posts
 */
import { ApolloQueryResult } from '@apollo/client';
import { compose } from '@reduxjs/toolkit';
import { always, cond, pipe, prop, T, ifElse, concat, path } from 'ramda';
import React, { Dispatch, memo, ReactElement, SyntheticEvent, useState } from 'react';
import { injectIntl, IntlShape } from 'react-intl';
import { connect } from 'react-redux';

import {
    GetPostsQuery,
    GetPostsQueryVariables,
    PageInfo,
    PostEdge,
    useGetPostsQuery,
} from '../../../generated/graphcms-schema';
import { getText } from '../../../locale';
import { isNilOrEmpty, mapIndexed } from '../../../utils/helpers';
import { IScrollProps, useScrollPosition } from '../../../utils/hooks/useScrollPosition';
import ErrorMessage from '../../components/ErrorMessage';
import Paragraph from '../../components/ErrorMessage/Paragraph';
import Search from '../../components/Search';
import TagButton from '../../components/TagCloud/TagButton';
import Collapse from '../../elements/Collapse';
import Separator, { ContentStyling } from '../../elements/Separator';
import Spinner from '../../elements/Spinner';
import commonMessages from '../App/model/messages';
import { selectLocation } from '../App/model/selectors';

import Grid from './Grid/Loadable';
import { removeTags, TModifyTags, setSearchText, TModifySearchText, TPostsTags } from './model';
import postsMessages from './model/messages';
import { makeSelectPostsSearchText, makeSelectPostsTags } from './model/selectors';
import { Article, Header, HeaderTagStyles, HeaderCollapseStyles } from './Styled';

export interface IPosts {
    posts: Array<PostEdge>,
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
    /** Tag click handler, sets tag name as posts filter condition. */
    onTagClick: (tags: TPostsTags) => void;
    /** Posts search text. */
    search: string;
    /** Search text handler, update search query parameter. */
    onTextSearch: (text: string) => void;
}

interface IDispatchProps extends Pick<IPostsProps, 'onTagClick' | 'onTextSearch'> {
    /** Dispatches action. */
    dispatch: Dispatch<TModifyTags | TModifySearchText>;
}

const { noResults } = commonMessages;
const { searchByTags, searchBySubject } = postsMessages;

const defaultSkip = 0;
const defaultFirst = 12;
const CONNECTION = 'postsConnection';
// TODO: refactor next to methods as they are almost identical.
const getEdges = ifElse(isNilOrEmpty, always([]), path([CONNECTION, 'edges']));
const getPageInfo = ifElse(isNilOrEmpty, always({ hasNextPage: false }), path([CONNECTION, 'pageInfo']));

/**
 * Creates Posts component.
 * @param {IPostsProps} props - contains component props.
 * @method
 * @return {ReactNode} Posts component.
 * @constructor
 */
function PostsComponent(props: IPostsProps): ReactElement {
    const { tags, onTagClick, search, onTextSearch } = props;
    const [skipped, setSkipped] = useState<number>(defaultSkip);
    const localizedText = (message) => getText(message, props) as string;
    const hasTags = Boolean(tags.length);

    // https://github.com/apollographql/apollo-client/issues/6209
    const { data, loading, error, fetchMore } = useGetPostsQuery({
        variables: { skip: defaultSkip, first: defaultFirst, search, tags },
        fetchPolicy: 'cache-and-network',
    });
    const { hasNextPage }: PageInfo = getPageInfo(data);

    /**
     * Triggers additional posts loading, updates previous query results adding loading data.
     * @param {number} skipRecords - records to be skipped in next query.
     * @return {Promise<ApolloQueryResult<GetPostsQuery>>} will return apollo gql query.
     */
    function triggerFetchMore(skipRecords: number): Promise<ApolloQueryResult<GetPostsQuery>> {
        return fetchMore({
            variables: { skip: skipRecords, first: defaultFirst, search, tags },
            updateQuery: (previousResult: GetPostsQuery, options: { fetchMoreResult?: GetPostsQuery, variables?: GetPostsQueryVariables }) => {
                const { fetchMoreResult } = options;

                if (fetchMoreResult) {
                    setSkipped(skipped + defaultFirst);

                    return {
                        postsConnection: {
                            __typename: 'PostConnection',
                            edges: concat(previousResult.postsConnection.edges, getEdges(fetchMoreResult)),
                            pageInfo: getPageInfo(fetchMoreResult)
                        }
                    };
                }

                return previousResult;
            }
        });
    }

    useScrollPosition({
        effect: async ({ atBottom }: IScrollProps): Promise<void> => {
            if (atBottom && ! loading && hasNextPage) {
                await triggerFetchMore(skipped + defaultFirst);
            }
        }
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
        const tagData = eventData.currentTarget.getAttribute('data-id');

        onTagClick(tagData
            ? [tagData]
            : []
        );
    }

    const tagsList = ifElse(
        always(hasTags),
        mapIndexed((item: unknown, index: number) => (
            <TagButton text={ String(item) } key={ index } onClick={ handleTagClick } styling={ HeaderTagStyles } />
        )),
        always(null)
    );


    return (
        <Article error={ error }>
            <Header>
                <div>
                    <Collapse isOpen={ hasTags } styling={ HeaderCollapseStyles } >
                        <span>{ localizedText(searchByTags) }</span>
                        { tagsList(tags) }
                    </Collapse>
                </div>
                <Search
                    id="pw-posts-search"
                    label={localizedText(searchBySubject)}
                    onInputChange={onTextSearch}
                />
            </Header>
            <Separator styling={ContentStyling} />
            <Content
                error={ error }
                loading={ ! skipped && loading }
                posts={ data
                    ? getEdges(data)
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
export function mapDispatchToProps(dispatch: Dispatch<TModifyTags | TModifySearchText>): IDispatchProps {
    return {
        onTagClick: (tags: TPostsTags) => {
            dispatch(removeTags(tags));
        },
        onTextSearch: (text: string) => {
            dispatch(setSearchText(text));
        },
        dispatch,
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, injectIntl, memo)(PostsComponent);

