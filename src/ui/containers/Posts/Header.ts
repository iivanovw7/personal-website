/**
 * Module contains post header component.
 * @module ui/containers/Posts/Header
 * @author Igor Ivanov
 */
import styled, { css } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { styleMixins } from '../../styles/mixins';
import { textColor } from '../../styles/theme/typography';

type THeaderProps = PartialAndNullable<{
}>;

const Header = styled.div<THeaderProps>`
    color: ${textColor};
    flex-direction: row;
    height: 100%;
    ${styleMixins.justifyAlignFlex('flex-start', 'center')};
    padding: 1rem 0;
    width: 100%;
`;

export const HeaderCollapseStyles = css`
    width: 100%;
`;

export const HeaderTagStyles = css`
    margin-left: 1rem;
`;

export default Header;
