import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    subredditSelected: "r/Home/",
    error: false,
    isLoading: false
};

const options = {
    name: "posts",
    initialState,
    reducers: {
        setSubredditSelected(state, action) {
            state.subredditSelected = action.payload;
        }
    }
}

export const postsSlice = createSlice(options);

export const selectSubredditUrl = (state) => state.posts.subredditSelected;

export const { setSubredditSelected } = postsSlice.actions;

export default postsSlice.reducer;