/**
 * Module contains styled switch container.
 * @module ui/components/Switch/Container
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { PartialAndNullable } from '../../../types/util';
import { zIndex } from '../../styles/mixins';

type ContainerProps = PartialAndNullable<{
    id: string;
    checked: boolean;
    image: string;
    themeSwitch: boolean;
}>;

// prettier-ignore
const Container = styled.div<ContainerProps>`
    background-image: ${(props) => (props.image
        ? `url(${props.image})`
        : 'none'
    )};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0.24rem;
    content: '';
    display: ${(props) => (props.themeSwitch
        ? 'block'
        : 'none'
    )};
    height: 1rem;
    left: ${(props) => (props.checked
        ? 6
        : 30 // eslint-disable-line
    )}px;
    position: absolute;
    width: 1rem;
    z-index: ${zIndex.ThemeSwitchContainer};
`;

export default Container;
