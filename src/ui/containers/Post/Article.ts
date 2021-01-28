/**
 * Module contains post article component.
 * @module ui/containers/Post/Article
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { styleMixins } from '../../styles/mixins';
import { base } from '../../styles/settings';
import { mainBg } from '../../styles/theme/background';

// prettier-ignore
const Article = styled.div`
    background-color: ${mainBg};
    border-radius: 0.25rem;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-top: ${base.topBarHeight}rem;
    ${styleMixins.vertAlignFlex()};
    ${({ error }) => error && `
        ${styleMixins.absoluteCentred()};
        width: 100%;
    `}
    padding: 0.5rem;
    user-select: none;
`;

export default Article;
