import React from "react";
import './SubredditCategory.css';
import { subreddits } from "../mocks/reddit_list_subredits";

export function SubredditCategory() {
    const subcategoryTitle = extractSubRedditsTitle(subreddits);

    return (
        <div className='subreddit-container'>
            <h2>Subreddits</h2>
            <div className='subcategory-container'>
                {subcategoryTitle.map(title => <p>{title}</p>)}
            </div>
        </div>
    )
}

export function extractSubRedditsTitle(payload) {
    return payload.data.children.map(subreddit => subreddit.data.title);
}