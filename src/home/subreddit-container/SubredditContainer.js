import React, {useEffect, useState} from "react";
import "./SubredditContainer.css";
import { Subreddit } from "../../subreddit/Subreddit";
import { getSubreddits } from "../../api/reddit";


export function SubredditContainer() {

    const [subreddits, setSubreddits] = useState([]);

    useEffect(() => {
        getSubreddits()
            .then(subreddits => {
                setSubreddits(subreddits)
            })
    }, [])

    return (
        <div className="subreddit-container">
            <h2>Subreddits</h2>
            <div className="subcategory-container">
                {
                    subreddits
                    .map(subreddit => <Subreddit title={subreddit.title} />)
                }
            </div>
        </div>
    )
}
