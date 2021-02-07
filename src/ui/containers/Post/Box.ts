/**
 * Module contains inner post box.
 * @module ui/containers/Post/Box
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { mainBgInverse } from '../../styles/theme/background';
import { textColorInverse } from '../../styles/theme/typography';

const Box = styled.div`
    width: 100%;

    u {
        background-color: ${mainBgInverse};
        color: ${textColorInverse};
        opacity: 0.8;
        padding: 0.1em;
    }
`;

export default Box;
