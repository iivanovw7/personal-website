/**
 * Module contains posts container
 * @module ui/containers/Posts/Container
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { respondToMedia, mediaKey, styleMixins } from '../../styles/mixins';

// prettier-ignore
const Container = styled.div`
    flex-direction: column;
    ${respondToMedia[mediaKey('md')]`
        padding-bottom: ${(props) => (props.hasMore
        ? '5em'
        : '0em'
    )};`};
    ${styleMixins.vertAlignFlex()};
`;

export default Container;
