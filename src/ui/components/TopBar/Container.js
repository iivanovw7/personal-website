/**
 * Module contains application TopBar container
 * @module ui/components/TopBar/Container
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { zIndex } from '../../styles/mixins';
import { base, colorSet } from '../../styles/settings';
import { topBarBg } from '../../styles/theme/background';

const { first, second, third } = colorSet.gradients;

const Container = styled.header`
    align-items: center;
    background-color: ${topBarBg};
    border-bottom: 0.225rem solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
        to right,
        ${String(first)} 0%,
        ${String(second)} 50%,
        ${String(third)} 95%
    );
    display: flex;
    flex-direction: row;
    height: ${base.topBarHeight}em;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${zIndex.TopBar};
`;

export default Container;
