/**
 * Asynchronously loads the component for NotFoundPage
 * @module ui/containers/NotFoundPage/Loadable
 */
import React from 'react';

import loadable from '../../../utils/loadable';

/**
 * Lazy load wrapper, imports page component.
 * @returns {Node} wrapped component or loader component.
 */
export default loadable(() => import('./index'), {
    fallback: <p>...</p>,
});
