/**
 * Module contains main application wrapper element
 * @module ui/containers/App/Section
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { mainBg } from '../../styles/theme/background';

const Section = styled.section`
    background-color: ${mainBg};
    margin: 0 auto;
    max-width: 100vw;
    min-height: 100vh;
    -ms-overflow-style: none;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    scroll-behavior: smooth;
    scrollbar-width: none;
`;

export default Section;
