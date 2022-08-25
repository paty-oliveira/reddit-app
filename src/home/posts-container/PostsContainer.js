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

    for (let key in postsMetadata) {
        posts.push(
            {
                title: postsMetadata[key].data.title,
                author: postsMetadata[key].data.author,
                time: postsMetadata[key].data.created,
                numberComments: postsMetadata[key].data.num_comments,
                ups: postsMetadata[key].data.ups,
                downs: postsMetadata[key].data.downs,
                commentsUrl: postsMetadata[key].data.permalink
            })
    }

    return posts;
}
