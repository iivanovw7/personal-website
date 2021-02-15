/**
 * Module contains post article component.
 * @module ui/containers/Post/Article
 * @author Igor Ivanov
 */
import { ApolloError } from '@apollo/client';
import styled from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { styleMixins, respondToMedia, mediaKey } from '../../styles/mixins';
import { base, breakpoints } from '../../styles/settings';
import { mainBg } from '../../styles/theme/background';

type ArticleProps = PartialAndNullable<{
    error?: ApolloError;
}>;

/* eslint-disable */

const Article = styled.div<ArticleProps>`
    background-color: ${mainBg};
    border-radius: 0.25rem;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin: ${base.topBarHeight}rem auto 1rem auto;
    max-width: ${breakpoints.md}px;
    ${styleMixins.vertAlignFlex()};
    ${({ error }) => error && `
        ${styleMixins.absoluteCentred()};
        width: 100%;
    `}
    ${respondToMedia[mediaKey('md')]`
        padding: 0.5rem;
    )};`};
    padding: 1rem;
    user-select: none;
`;

/* eslint-enable */

export default Article;
