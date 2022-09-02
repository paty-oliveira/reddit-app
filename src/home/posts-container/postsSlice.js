import { createSlice } from "@reduxjs/toolkit";
import {getPostsFromSubreddit } from "../../api/reddit";


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
        },
        startGetPostsFromSubreddit(state){
            state.isLoading = true;
        },
        getPostsFromSubredditSuccess(state, action) {
            state.posts = action.payload;
        },
        getPostsFromSubredditFailure(state) {
            state.error = true;
        }
    }
}

export const postsSlice = createSlice(options);

// This is a Redux Thunk that gets posts from the subreddits
export const fetchPostsFromSubreddit = (subredditUrl) => async (dispatch) => {
    try {
        dispatch(startGetPostsFromSubreddit());
        const posts = await getPostsFromSubreddit(subredditUrl);
        dispatch(getPostsFromSubredditSuccess(posts))
    } catch (error) {
        dispatch(getPostsFromSubredditFailure())
    }
}

export const selectSubredditUrl = (state) => state.posts.subredditSelected;

export const selectPostsFromSubreddit = (state) => state.posts.posts;

export const {
    setSubredditSelected,
    startGetPostsFromSubreddit,
    getPostsFromSubredditSuccess,
    getPostsFromSubredditFailure
} = postsSlice.actions;

export default postsSlice.reducer;