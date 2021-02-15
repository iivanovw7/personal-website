/**
 * Module contains inner post box.
 * @module ui/containers/Post/Box
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { styleMixins } from '../../styles/mixins';
import { mainBgInverse } from '../../styles/theme/background';
import { textColorInverse } from '../../styles/theme/typography';

const Box = styled.div`
    width: 100%;

    u {
        ${styleMixins.emphasizedText(textColorInverse, mainBgInverse)};
    }
`;

export default Box;
