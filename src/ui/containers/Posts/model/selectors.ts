/**
 * Module contains posts related selectors.
 * @module ui/containers/Posts/model/selectors
 * @author Igor Ivanov
 */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../store/combineReducers';

import { TPostsState } from './index';

/**
 * Selects posts state.
 * @method
 * @param {Object} state - application state.
 * @return {TPostsState} posts - posts state.
 */
const selectPosts = (state: RootState): TPostsState => state.posts;

/**
 * Select posts tags filter.
 * @method
 * @return {Function} creates new posts tags selector.
 */
const makeSelectPostsTags = createSelector(
    selectPosts,
    (postsState: TPostsState) => postsState.tags
);

/**
 * Select posts tags search text.
 * @method
 * @return {Function} creates new posts search text selector.
 */
const makeSelectPostsSearchText = createSelector(
    selectPosts,
    (postsState: TPostsState) => postsState.search
);

export { selectPosts, makeSelectPostsTags, makeSelectPostsSearchText };
