/**
 * Module contains reducers related to posts.
 * @module ui/containers/Posts/model
 * @author Igor Ivanov
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
export type TSetTags = {
    type: string,
    payload: TPostsTags
};

export const postsSlice = createSlice({
    name: 'pw/postsSlice',
    initialState: initState,
    reducers: {
        setTags(state, action: PayloadAction<TPostsTags>) {
            state.tags = action.payload;
        },
        setSearchText(state, action: PayloadAction<TPostsSearch>) {
            state.search = action.payload;
        }
    }
});

export const { setTags, setSearchText } = postsSlice.actions;

export default postsSlice.reducer;
