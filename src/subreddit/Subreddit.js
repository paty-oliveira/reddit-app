import React from "react";
import "./Subreddit.css";


export function Subreddit({title}) {

    return (
        <div className="subreddit-item" >
            <button
                type="button"
                className="subreddit-button"
                data-testid="test-title-props">{title}
            </button>
        </div>
    )
}
