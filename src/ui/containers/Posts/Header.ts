/**
 * Module contains post header component.
 * @module ui/containers/Posts/Header
 * @author Igor Ivanov
 */
import styled, { css } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { styleMixins, respondToMedia, mediaKey } from '../../styles/mixins';
import { fadePrimaryBg } from '../../styles/theme/background';
import { textColor } from '../../styles/theme/typography';

const { justifyAlignFlex } = styleMixins;

type THeaderProps = PartialAndNullable<{
}>;

const Header = styled.div<THeaderProps>`
    color: ${textColor};
    flex-direction: column;
    min-height: 6rem;
    ${justifyAlignFlex('center', 'flex-start')};
    ${respondToMedia[mediaKey('sm')]`
        flex-direction: row;
        ${justifyAlignFlex('space-between', 'center')};
    `};
    padding: 1rem 0;
    width: 100%;
`;

export const HeaderCollapseStyles = css`
    background: ${fadePrimaryBg};
    border-radius: 0.25rem;
    margin: 0.389rem 0.889rem 0.389rem 0;
    padding: 0.389rem 0.889rem;

    > span {
        margin-right: 0.76rem;
    }
`;

export const HeaderTagStyles = css`
    margin-right: 0.76rem;
`;

export default Header;
