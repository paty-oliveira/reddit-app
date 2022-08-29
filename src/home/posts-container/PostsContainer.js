import React, {useEffect, useState} from "react";
import "./PostsContainer.css";
import { Post } from "../../post/Post";
import { getPosts } from "../../api/reddit";

export function PostsContainer() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
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
