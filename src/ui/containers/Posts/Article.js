/**
 * Module contains article component.
 * @module ui/containers/App/Wrapper
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { styleMixins } from '../../styles/mixins';
import { base } from '../../styles/settings';
import { mainBg } from '../../styles/theme/background';

const Article = styled.article`
    background-color: ${mainBg};
    flex-direction: column;
    height: 100%;
    margin-top: ${base.topBarHeight}rem;
    padding: 1rem;
    ${styleMixins.vertAlignFlex()};
`;

export default Article;
