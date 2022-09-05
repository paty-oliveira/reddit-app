import React from "react";
import "./Home.css"
import { SubredditContainer } from "../subreddit-container/SubredditContainer";
import { PostsContainer } from "../posts-container/PostsContainer";


export function Home() {

    return (
        <div className="home-container">
            <SubredditContainer />
            <PostsContainer />
        </div>
    )
}