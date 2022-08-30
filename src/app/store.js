import { configureStore } from '@reduxjs/toolkit';
import { subredditsSlice } from "../home/subreddit-container/subredditSlice";

export const store = configureStore({
    reducer: {
        subreddits: subredditsSlice.reducer
    }
})