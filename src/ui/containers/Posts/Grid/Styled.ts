/**
 * Module contains posts grid styled components.
 * @module ui/containers/Posts/Grid/Styled
 * @author Igor Ivanov
 */
import styled, { css } from 'styled-components';

import { styleMixins } from '../../../styles/mixins';
import { fadePrimaryBg } from '../../../styles/theme/background';
import { textColor } from '../../../styles/theme/typography';

type TGridProps = {
    hasMore: boolean;
};

export const Bar = styled.div`
    flex-direction: row;
    justify-content: space-between;
    ${styleMixins.vertAlignFlex('flex-end')};
`;

export const Cell = styled.div`
    background: ${fadePrimaryBg};
    border-radius: 0.25rem;
    color: ${textColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
    padding: 0.38rem 0.75rem;
    position: relative;
`;

export const GridContainer = styled.div<TGridProps>`
    display: grid;
    grid-auto-flow: dense;
    grid-auto-rows: auto;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    margin-top: 20px;
    width: 100%;
`;

export const LinkIconStyles = css`
    border: none;
    margin-bottom: 0;
    margin-right: 0;
    width: 2.38rem;
`;

export const LinkTitleStyles = css`
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;

    &:hover,
    &:focus {
        text-decoration: underline;
    }
`;

export const LinkTitleH6Styles = css`
    text-align: left;
`;
