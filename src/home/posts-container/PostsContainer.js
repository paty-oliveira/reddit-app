import React from "react";
import "./PostsContainer.css";
import { topPosts } from "../../mocks/reddit_top_posts";
import { Post } from "../../post/Post";

export function PostsContainer() {

    const { title, author, time, numberComments } = extractPostsFromReddit(topPosts);

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
    const title = payload.data.children.map(
        post => post.data.title
    );

    const author = payload.data.children.map(
        post => post.data.author
    );

    const time = payload.data.children.map(
        post => post.data.created
    );

    const numberComments = payload.data.children.map(
        post => post.data.num_comments
    );

    return {
        title: title,
        author: author,
        time: time,
        numberComments: numberComments
    };
}