import React from "react";
import './Subreddit.css';


export function Subreddit({title}) {

    return (
        <div className='subreddit-item' >
            <p data-testid="test-title-props">{title}</p>
        </div>
    )
}
