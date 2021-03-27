import { keyframes } from 'styled-components';

export const fadeInTop = keyframes`
    0% {
        opacity: 0;
        transform: translate(0px, -10px);
    }
    100% {
        opacity: 1;
        transform: translate(0px, 0px);
    }
`;
