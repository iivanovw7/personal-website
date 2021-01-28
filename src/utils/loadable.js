/**
 * Module contains lazy loading.
 * @module utils/loadable
 */
import React, { lazy, Suspense } from 'react';

/**
 * Lazy loading component.
 * @param {Function} importFunc - import function.
 * @param {Object} fallback - fallback component, in case import has not yet been loaded.
 * @return {*} React element with props.
 */
const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
    const LazyComponent = lazy(importFunc);

    return (props) => ( // eslint-disable-line
        <Suspense fallback={fallback}>
            <LazyComponent {...props} />
        </Suspense>
    );

};
export default loadable;
