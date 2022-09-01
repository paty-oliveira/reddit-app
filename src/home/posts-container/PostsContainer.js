import React, {useEffect, useState} from "react";
import "./PostsContainer.css";
import { Post } from "../../post/Post";
import { getPostsFromSubreddit } from "../../api/reddit";

export function PostsContainer() {

    const [posts, setPosts] = useState([]);
    const subredditUrl = "r/Home/";
    // get url based on event handler
    // When I click on subreddit, I got the url from subreddit using a selector


    useEffect(() => {
        getPostsFromSubreddit(subredditUrl)
            .then(posts =>
                setPosts(posts)
            )
    }, [])

    return (
        <div className="post-container">
            <h2>Posts</h2>
            {
                posts.map(
                    post => <Post post={post} />)
            }
        </div>
    )
}
