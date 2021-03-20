/**
 * Module contains posts grid
 * @module ui/containers/Posts/Grid/Grid
 * @author Igor Ivanov
 */
import styled from 'styled-components';

type TGridProps = {
    hasMore: boolean;
};

const Grid = styled.div<TGridProps>`
    display: grid;
    grid-auto-flow: dense;
    grid-auto-rows: auto;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    margin-top: 20px;
    width: 100%;
`;

export default Grid;
