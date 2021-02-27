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

type TArticleProps = PartialAndNullable<{
    error?: ApolloError;
}>;

/* eslint-disable */

const Article = styled.article<TArticleProps>`
    background-color: ${mainBg};
    flex-direction: column;
    height: 100%;
    margin: ${base.topBarHeight}rem auto 1rem auto;
    max-width: ${breakpoints.md}px;
    ${styleMixins.vertAlignFlex()};
    ${({ error }) => error && `
        ${styleMixins.absoluteCentred()};
        width: 100%;
    `}
    ${respondToMedia[mediaKey('md')]`
        padding-bottom: ${(props) => (props.hasMore
        ? '5em'
        : '0em'
    )};`};
    padding: 1rem;
`;

/* eslint-enable */

export default Article;
