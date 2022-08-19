import React from "react";
import './SubredditContainer.css';
import { subreddits } from "../mocks/reddit_list_subredits";
import { Subreddit } from "../subreddit-card/Subreddit";

export function SubredditContainer() {
    const subcategoryTitle = extractSubRedditsTitle(subreddits);

    return (
        <div className='subreddit-container'>
            <h2>Subreddits</h2>
            <div className='subcategory-container'>
                {
                    subcategoryTitle
                    .map(title => <Subreddit title={title} />)
                }
            </div>
        </div>
    )
}

export function extractSubRedditsTitle(payload) {
    return payload.data.children.map(subreddit => subreddit.data.title);
}