/**
 * Module contains post main component.
 * @module ui/containers/Post
 */
import { compose } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { always, cond, pipe, prop, T } from 'ramda';
import React, { FC, memo } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { Post, useGetPostQuery } from '../../../generated/graphcms-schema';
import { getText } from '../../../locale';
import { runCodePrettify } from '../../../utils/codePrettify';
import { isNilOrEmpty } from '../../../utils/helpers';
import { getLastItem } from '../../../utils/string';
import { textReadingTime } from '../../../utils/time';
import ErrorMessage from '../../components/ErrorMessage';
import TagCloud from '../../components/TagCloud';
import H1 from '../../elements/H1';
import H2 from '../../elements/H2';
import Paragraph from '../../elements/Paragraph';
import Separator, { ContentStyling } from '../../elements/Separator';
import Spinner from '../../elements/Spinner';
import { isPostsAreaPath } from '../../routes';
import commonMessages from '../App/model/messages';
import { selectLocation } from '../App/model/selectors';

import postMessages from './model/messages';
import formattedPostText from './model/util';
import { Box, Container, CreatedAtStyles, ReadingTimeStyles, TitleStyles } from './Styled';

const { noResults } = commonMessages;
const { readingTime, publishedAt } = postMessages;

export interface IPost {
    post: Post
}

export interface IPostProps {
    location: Location;
}

/**
 * Creates Post component.
 * @param {IPostProps} props - contains component props.
 * @method
 * @return {ReactNode} Post component.
 * @constructor
 */
const PostComponent: FC<IPostProps> = (props: IPostProps) => {
    const { location: currentLocation } = props;
    const { pathname } = currentLocation;
    const isPostsPath = isPostsAreaPath(pathname);
    const postId = getLastItem(pathname);
    const localizedText = (message, values?) => getText(message, props, values) as string;

    // https://github.com/apollographql/apollo-client/issues/6209
    const { data, loading, error } = useGetPostQuery({
        variables: { postId },
        fetchPolicy: 'cache-and-network',
        skip: ! isPostsPath,
    });

    const Content = cond([
        [prop('error'), always(<ErrorMessage />)],
        [prop('loading'), always(<Spinner />)],
        [pipe(prop('post'), isNilOrEmpty), always(<p>{ localizedText(noResults) }</p>)],
        [T, ({ post }: IPost) => {
            const { title, subject, createdAt, tags, content } = post;
            const { html } = content;
            const createdAtDate = dayjs(createdAt);

            runCodePrettify();

            return (
                <Box>
                    <H1 styles={TitleStyles}>{ title }</H1>
                    <H2>{ subject }</H2>
                    { createdAtDate.isValid() && (
                        <Paragraph styling={ CreatedAtStyles }>
                            { localizedText(publishedAt) }
                            <span>
                                { createdAtDate.format('DD MMM YYYY HH:MM A') }
                            </span>
                        </Paragraph>
                    ) }
                    <Paragraph styling={ ReadingTimeStyles }>
                        { localizedText(readingTime, {
                            // eslint-disable-next-line react/display-name
                            span: (text: string) => <span>{ text }</span>,
                            minutes: textReadingTime(html.length),
                        }) }
                    </Paragraph>
                    <TagCloud tags={ tags } />
                    <Separator styling={ ContentStyling } />
                    <Paragraph dangerouslySetInnerHTML={ { __html: formattedPostText(html) } } />
                </Box>
            );
        }],
    ]);

    return isPostsPath
        ? (
            <Container error={ error }>
                <Content
                    error={ error }
                    loading={ loading }
                    post={ data
                        ? data.post
                        : null } />
            </Container>
        )
        : <ErrorMessage />;
};

/**
 * Function selects parts of the state required in component.
 * @method
 * @param {Object} state
 *    Object contains application state.
 * @return {Function} selector
 */
const mapStateToProps = (state) => {
    return {
        location: selectLocation(state),
    };
};

const withConnect = connect(mapStateToProps);

export default compose(withConnect, injectIntl, memo)(PostComponent);
