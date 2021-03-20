/**
 * Module contains error message component.
 * @module ui/components/ErrorMessage/Container
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { mediaKey, respondToMedia, styleMixins } from '../../styles/mixins';
import { fadePrimaryBg } from '../../styles/theme/background';
import { textColor } from '../../styles/theme/typography';

// prettier-ignore
const Container = styled.div`
    background: ${fadePrimaryBg};
    border-radius: 0.714rem;
    color: ${textColor};
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    ${styleMixins.fluidWidth('90%')};
    ${styleMixins.vertAlignFlex()};
    ${respondToMedia[mediaKey('sm')]`
        ${styleMixins.fluidWidth('32.429rem')};
    )};`};
    padding: 2.286rem 2.286rem 3.286rem 2.286rem;
    position: relative;
`;

export default Container;
