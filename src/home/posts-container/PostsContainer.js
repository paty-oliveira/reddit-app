import React from "react";
import "./PostsContainer.css";
import { topPosts } from "../../mocks/reddit_top_posts";
import { Post } from "../../post/Post";

export function PostsContainer() {

    const postsInfo = extractPostsFromReddit(topPosts);

    return (
        <div className="post-container">
            <h2>Posts</h2>
            {
                postsInfo.map(
                    post => <Post post={post} />)
            }
        </div>
    )
}

export function extractPostsFromReddit(payload) {
    const posts = [];
    let postsMetadata = payload.data.children;

    postsMetadata.map(
        post => posts.push(
            {
                title: post.data.title,
                author: post.data.author,
                time: post.data.created,
                numberComments: post.data.num_comments,
                ups: post.data.ups,
                downs: post.data.downs,
                commentsUrl: post.data.permalink
            }
        )
    )

    return posts;
}
