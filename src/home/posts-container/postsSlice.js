import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    subredditSelected: "r/Home/"
};

const options = {
    name: "posts",
    initialState,
    reducers: {
    }
}

export const postsSlice = createSlice(options);

export default postsSlice.reducer;