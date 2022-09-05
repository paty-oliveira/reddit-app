import {createSelector, createSlice} from "@reduxjs/toolkit";
import {getPostsFromSubreddit } from "../../api/reddit";


const initialState = {
    posts: [],
    subredditSelected: "r/Home/",
    searchTerm: "",
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
        },
        setSearchTerm(state, action){
            state.searchTerm = action.payload;
        }
}}

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

export const selectSearchTerm = (state) => state.posts.searchTerm;

export const selectPostsBasedOnSearchTerm = createSelector(
    [selectPostsFromSubreddit, selectSearchTerm],
    (posts, searchTerm) => {
                if (searchTerm !== ''){
                    return posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    return posts;
    })

export const {
    setSubredditSelected,
    startGetPostsFromSubreddit,
    getPostsFromSubredditSuccess,
    getPostsFromSubredditFailure,
    setSearchTerm,
    filterPostsBySearchTerm
} = postsSlice.actions;

export default postsSlice.reducer;