/**
 * Module contains posts grid cell horizontal bar
 * @module ui/containers/Posts/Grid/Cell
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { styleMixins } from '../../../styles/mixins';

const Bar = styled.div`
    flex-direction: row;
    justify-content: space-between;
    ${styleMixins.vertAlignFlex('flex-end')};
`;

export default Bar;
