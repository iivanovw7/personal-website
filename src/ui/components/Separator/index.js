/**
 * Module contains Separator component
 * @module ui/components/Separator
 * @author Igor Ivanov
 */
import { linearGradient } from 'polished';
import styled from 'styled-components';

import { zIndex } from '../../styles/mixins';
import { colorSet } from '../../styles/settings';

const { gradients } = colorSet;

const Separator = styled.div`
    height: ${(props) => props.height || 0.1}em;
    ${linearGradient({
        colorStops: [`${gradients.first} 0%`, `${gradients.second} 50%`, `${gradients.third} 95%`],
        toDirection: 'to right',
        fallback: gradients.first,
    })};
    width: 100%;
    z-index: ${zIndex.Separator};
`;

export default Separator;
