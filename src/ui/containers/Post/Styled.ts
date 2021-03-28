/**
 * Module contains additional styles.
 * @module containers/Post/Styled
 * @author Igor Ivanov
 */

import { ApolloError } from '@apollo/client';
import styled, { css } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { mediaKey, respondToMedia, styleMixins } from '../../styles/mixins';
import { base, breakpoints, typography } from '../../styles/settings';
import { mainBg, mainBgInverse } from '../../styles/theme/background';
import { textColorInverse, titleColor } from '../../styles/theme/typography';

const { datesFontFamily } = typography;

type TContainerProps = PartialAndNullable<{
    error?: ApolloError;
}>;

export const CreatedAtStyles = css`
    margin-bottom: 0.225rem;
    ${styleMixins.fontFamily(datesFontFamily)};

    span {
        ${styleMixins.emphasizedText(textColorInverse, mainBgInverse)}
    }
`;

export const ReadingTimeStyles = css`
    margin-top: 0.225rem;
    ${CreatedAtStyles};
`;

/* eslint-disable */

export const Container = styled.div<TContainerProps>`
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
`;

/* eslint-enable */

export const Box = styled.div`
    width: 100%;

    u {
        ${styleMixins.emphasizedText(textColorInverse, mainBgInverse)};
    }
`;

export const TitleStyles = css`
    color: ${titleColor};
`;
