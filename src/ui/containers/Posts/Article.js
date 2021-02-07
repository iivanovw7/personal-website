/**
 * Module contains posts article component.
 * @module ui/containers/Posts/Article
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { styleMixins, respondToMedia, mediaKey } from '../../styles/mixins';
import { base, breakpoints } from '../../styles/settings';
import { mainBg } from '../../styles/theme/background';

// prettier-ignore
const Article = styled.article`
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

export default Article;
