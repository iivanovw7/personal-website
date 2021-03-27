/**
 * Module contains reducers related to posts.
 * @module ui/containers/Posts/model
 * @author Igor Ivanov
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { concat, uniq, without } from 'ramda';

/**
 * Contains initial state.
 */
export const initState = {
    tags: [] as string[],
    search: '',
};

export type TPostsState = typeof initState;
export type TPostsTags = TPostsState['tags'];
export type TPostsSearch = TPostsState['search'];
export type TModifyTags = {
    type: string,
    payload: TPostsTags
};
export type TModifySearchText = {
    type: string,
    payload: TPostsSearch,
};

export const postsSlice = createSlice({
    name: 'pw/postsSlice',
    initialState: initState,
    reducers: {
        setTags(state, action: PayloadAction<TPostsTags>) {
            state.tags = uniq(concat(state.tags, action.payload));
        },
        removeTags(state, action: PayloadAction<TPostsTags>) {
            state.tags = without(action.payload, state.tags);
        },
        setSearchText(state, action: PayloadAction<TPostsSearch>) {
            state.search = action.payload;
        }
    }
});

export const { setTags, removeTags, setSearchText } = postsSlice.actions;

export default postsSlice.reducer;
