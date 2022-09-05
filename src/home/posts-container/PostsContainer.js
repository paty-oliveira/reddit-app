import React, {useEffect} from "react";
import "./PostsContainer.css";
import { Post } from "../../post/Post";
import { useSelector, useDispatch } from "react-redux";
import { selectSubredditUrl, fetchPostsFromSubreddit, selectPostsBasedOnSearchTerm } from "./postsSlice";

export function PostsContainer() {

    const dispatch = useDispatch();
    const posts = useSelector(selectPostsBasedOnSearchTerm);
    const subredditUrl = useSelector(selectSubredditUrl);

    useEffect(() => {
        dispatch(fetchPostsFromSubreddit(subredditUrl))
    }, [dispatch, subredditUrl])

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
