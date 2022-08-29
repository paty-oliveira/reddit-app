import React from "react";
import "./PostsContainer.css";
import { topPosts } from "../../mocks/reddit_top_posts";
import { Post } from "../../post/Post";
import {extractPostsFromReddit} from "../../utils/utils";

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
