/**
 * Asynchronously loads grid element
 * @module ui/containers/Posts/Grid/Loadable
 */
import loadable from '../../../../utils/loadable';

/**
 * Lazy load wrapper, imports component.
 * @returns {Node} wrapped component or loader component.
 */
export default loadable(() => import('./index'), {
    fallback: '',
});
