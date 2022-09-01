import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    subredditSelected: "r/Home/",
    error: false,
    loading: false
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

export const { setSubredditSelected } = postsSlice.actions;

export default postsSlice.reducer;