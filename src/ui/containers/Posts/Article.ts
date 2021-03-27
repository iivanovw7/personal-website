/**
 * Module contains posts article component.
 * @module ui/containers/Posts/Article
 * @author Igor Ivanov
 */
import { ApolloError } from '@apollo/client';
import styled from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { styleMixins, respondToMedia, mediaKey } from '../../styles/mixins';
import { base, breakpoints } from '../../styles/settings';
import { mainBg } from '../../styles/theme/background';

const { vertAlignFlex, absoluteCentred } = styleMixins;

type TArticleProps = PartialAndNullable<{
    error?: ApolloError;
}>;

/*
    eslint-disable
    @typescript-eslint/indent,
    @typescript-eslint/restrict-template-expressions
*/

const Article = styled.article<TArticleProps>`
    background-color: ${mainBg};
    flex-direction: column;
    height: 100%;
    margin: ${base.topBarHeight}rem auto 1rem auto;
    max-width: ${breakpoints.md}px;
    ${vertAlignFlex()};
    ${({ error }) => error && `
        ${absoluteCentred()};
        padding-top: ${base.topBarHeight * 2}rem;
        width: 100%;
    `}
    ${respondToMedia[mediaKey('md')]`
        padding-bottom: ${(props) => (props.hasMore
            ? '5em'
            : '0em'
        )};
    `};
    padding: 1rem;
`;

/*
    eslint-enable
    @typescript-eslint/indent,
    @typescript-eslint/restrict-template-expressions
*/

export default Article;
