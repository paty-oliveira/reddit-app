import React, {useEffect, useState} from "react";
import "./SubredditContainer.css";
import { Subreddit } from "../../subreddit/Subreddit";
import { getSubredditsTitles } from "../../api/reddit";

export function SubredditContainer() {

    const [titles, setTitles] = useState([]);

    useEffect(() => {
        getSubredditsTitles()
            .then(titles => {
                setTitles(titles)
            })
    }, [])

    return (
        <div className="subreddit-container">
            <h2>Subreddits</h2>
            <div className="subcategory-container">
                {
                    titles
                    .map(title => <Subreddit title={title} />)
                }
            </div>
        </div>
    )
}
