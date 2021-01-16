/**
 * Module contains additional styles used in locale switcher image
 * @module components/LocaleSwitch/ImageStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { iconBorderColor } from '../../styles/theme/borders';

const ImageStyles = css`
    border: 1px solid ${iconBorderColor};
    height: 100%;
    margin: 0 auto;
    opacity: 0.9;
    width: 100%;
`;

export default ImageStyles;
