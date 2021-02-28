/**
 * Module contains posts grid cell
 * @module ui/containers/Posts/Grid/Cell
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { fadePrimaryBg } from '../../../styles/theme/background';
import { textColor } from '../../../styles/theme/typography';

const Cell = styled.div`
    background: ${fadePrimaryBg};
    border-radius: 0.25rem;
    color: ${textColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
    padding: 0.38rem 0.75rem;
    position: relative;
`;

export default Cell;
