import { configureStore } from '@reduxjs/toolkit';
import { subredditsSlice } from "../home/subreddit-container/subredditSlice";
import { postsSlice } from "../home/posts-container/postsSlice";

export const store = configureStore({
    reducer: {
        subreddits: subredditsSlice.reducer,
        posts: postsSlice.reducer
    }
})