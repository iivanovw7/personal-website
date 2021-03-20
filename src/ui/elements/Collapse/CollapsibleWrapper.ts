/**
 * Module styles for collapse component
 * @module ui/elements/Collapse/StyledCollapse
 * @author Igor Ivanov
 */
import { animated } from 'react-spring';
import styled, { CSSProp } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';

type TCollapseProps = PartialAndNullable<{
    styling?: CSSProp
    ref: any // eslint-disable-line
}>;

const CollapsibleWrapper = styled(animated.div)<TCollapseProps>`
    ${(props) => props.styling};
    overflow: hidden;
`;

export default CollapsibleWrapper;
