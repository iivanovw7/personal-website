/**
 * Module contains H2 header component
 * @module ui/elements/H2
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { textColor } from '../../styles/theme/typography';

const H2 = styled.h2`
    color: ${textColor};
    font-size: 1.6rem;
    ${(props) => props.styling};
`;

export default H2;
