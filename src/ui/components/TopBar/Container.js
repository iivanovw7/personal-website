/**
 * Module contains application TopBar container
 * @module ui/components/TopBar/Container
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { zIndex } from '../../styles/mixins';
import { base } from '../../styles/settings';
import { topBarBg } from '../../styles/theme/background';
import { topBarBorderColor } from '../../styles/theme/borders';

const Container = styled.header`
    align-items: center;
    background-color: ${topBarBg};
    border-bottom: 2px solid ${topBarBorderColor};
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
