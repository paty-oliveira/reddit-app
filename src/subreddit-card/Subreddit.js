import React from "react";
import './Subreddit.css';

export function Subreddit(props) {
    const title = props.title;

    return (
        <div className='subreddit-item'>
            <p>#{title}</p>
        </div>
    )
}


