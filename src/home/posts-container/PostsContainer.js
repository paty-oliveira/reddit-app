import React from "react";
import "./PostsContainer.css";
import { topPosts } from "../../mocks/reddit_top_posts";
import { Post } from "../../post/Post";

export function PostsContainer() {

    const postsInfo = extractPostsFromReddit(topPosts);

    return (
        <div className="post-container">
            {
                postsInfo.map(post =>
                    <Post
                        title={post.title}
                        author={post.author}
                        time={post.time}
                        numberComments={post.numberComments}
                    />)
            }
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
