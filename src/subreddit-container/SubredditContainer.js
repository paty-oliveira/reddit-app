import React, {useEffect} from "react";
import "./SubredditContainer.css";
import { Subreddit } from "./subreddit/Subreddit";
import { useSelector, useDispatch } from "react-redux";
import { selectSubreddits, fetchSubreddits} from "./subredditSlice";


export function SubredditContainer() {

    const subreddits = useSelector(selectSubreddits);
    const dispatch = useDispatch();

    // fetchSubreddits thunk is the middleware between eventHandler and the store
    useEffect(() => {
        dispatch(fetchSubreddits())
    }, [dispatch])

    return (
        <div className="subreddit-container">
            <h2>Subreddits</h2>
            <div className="subcategory-container">
                {
                    subreddits
                    .map(subreddit => <Subreddit title={subreddit.title} url={subreddit.url} />)
                }
            </div>
        </div>
    )
}
