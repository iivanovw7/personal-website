/**
 * Module contains additional card styles
 * @module ui/containers/Posts/Grid/Styles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

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
