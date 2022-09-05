import { configureStore } from '@reduxjs/toolkit';
import { subredditsSlice } from "../subreddit-container/subredditSlice";
import { postsSlice } from "../posts-container/postsSlice";

export const store = configureStore({
    reducer: {
        subreddits: subredditsSlice.reducer,
        posts: postsSlice.reducer
    }
})