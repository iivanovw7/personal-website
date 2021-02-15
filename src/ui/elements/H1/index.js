/**
 * Module contains H1 header component
 * @module ui/elements/H1
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { colorSecondary } from '../../styles/theme/colors';

const H1 = styled.h1`
    color: ${colorSecondary};
    font-size: 2rem;
    margin-bottom: 0.25rem;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export default H1;
