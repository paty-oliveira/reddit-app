import React from "react";
import "./PostsContainer.css";
import { topPosts } from "../../mocks/reddit_top_posts";
import { Post } from "../../post/Post";

export function PostsContainer() {

    const { title, author, time, numberComments } = extractPostsFromReddit(topPosts);
    // I have a list of titles, authors, times and comments
    // I want to create each component with one title, one author, etc

    const posts = [];
    for (let i= 1; i <= title.length; i++) {
        posts.push(
            <Post
                title={title}
                author={author}
                time={time}
                numberComments={numberComments}
            />
        )
    }

    return (
        <div className="post-container">
            {posts}
        </div>
    )
}

export function extractPostsFromReddit(payload) {
    const posts = [];
    let postsMetadata = payload.data.children;

    for (let key in postsMetadata) {
        posts.push(
            {
                title: postsMetadata[key].data.title,
                author: postsMetadata[key].data.author,
                time: postsMetadata[key].data.created,
                numberComments: postsMetadata[key].data.num_comments
            })
    }

    return posts;
}