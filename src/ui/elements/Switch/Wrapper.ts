/**
 * Module contains styled wrapper around checkbox element.
 * @module ui/components/Switch/Wrapper
 * @author Igor Ivanov
 */
import styled, { CSSProp } from 'styled-components';

import { PartialAndNullable } from '../../../types/util';

type WrapperProps = PartialAndNullable<{
    variant: string;
    styling: CSSProp
}>;

/* eslint-disable @typescript-eslint/no-unsafe-return */

const Wrapper = styled.label<WrapperProps>`
    display: inline-block;
    height: 1.5rem;
    margin: 0 auto;
    ${(props) => props.styling};
    position: relative;
    vertical-align: middle;
    width: 3.13rem;
`;

/* eslint-enable @typescript-eslint/no-unsafe-return */

export default Wrapper;


