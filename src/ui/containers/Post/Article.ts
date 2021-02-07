/**
 * Module contains post article component.
 * @module ui/containers/Post/Article
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { styleMixins } from '../../styles/mixins';
import { base, breakpoints } from '../../styles/settings';
import { mainBg } from '../../styles/theme/background';

/* eslint-disable */
const Article = styled.div`
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
    padding: 0.5rem;
    user-select: none;
`;
/* eslint-enable */

export default Article;
