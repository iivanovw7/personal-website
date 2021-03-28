/**
 * Module contains Posts styled components.
 * @module containers/Posts/Styled
 * @author Igor Ivanov
 */

import { ApolloError } from '@apollo/client';
import styled, { css } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { mediaKey, respondToMedia, styleMixins } from '../../styles/mixins';
import { base, breakpoints } from '../../styles/settings';
import { fadePrimaryBg, mainBg } from '../../styles/theme/background';
import { textColor } from '../../styles/theme/typography';

const { vertAlignFlex, absoluteCentred, justifyAlignFlex } = styleMixins;

type TArticleProps = PartialAndNullable<{
    error?: ApolloError;
}>;

type THeaderProps = PartialAndNullable<{
}>;

/*
    eslint-disable
    @typescript-eslint/indent,
    @typescript-eslint/restrict-template-expressions
*/

export const Article = styled.article<TArticleProps>`
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
export const Header = styled.div<THeaderProps>`
    color: ${textColor};
    flex-direction: column;
    min-height: 6rem;
    ${justifyAlignFlex('center', 'flex-start')};
    ${respondToMedia[mediaKey('sm')]`
        flex-direction: row;
        ${justifyAlignFlex('space-between', 'center')};
    `};
    padding: 1rem 0;
    width: 100%;
`;

export const HeaderCollapseStyles = css`
    background: ${fadePrimaryBg};
    border-radius: 0.25rem;
    margin: 0.389rem 0.889rem 0.389rem 0;
    padding: 0.389rem 0.889rem;

    > span {
        margin-right: 0.76rem;
    }
`;

export const HeaderTagStyles = css`
    margin-right: 0.76rem;
`;
