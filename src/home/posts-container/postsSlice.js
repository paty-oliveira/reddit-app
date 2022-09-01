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

        },
        getPostsFromSubredditSuccess(state, action) {

        },
        getPostsFromSubredditFailure(state) {

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

export const {
    setSubredditSelected,
    startGetPostsFromSubreddit,
    getPostsFromSubredditSuccess,
    getPostsFromSubredditFailure
} = postsSlice.actions;

export default postsSlice.reducer;