import React from "react";
import "./Subreddit.css";
import { useDispatch } from "react-redux";
import {setSubredditSelected} from "../home/posts-container/postsSlice";


export function Subreddit({title, url}) {

    const dispatch = useDispatch();

    const handleSubredditClick = (event) => {
        dispatch(setSubredditSelected(url))
    }

    return (
        <div className="subreddit-item" >
            <button
                type="button"
                className="subreddit-button"
                data-testid="test-title-props"
                onClick={handleSubredditClick}
            >{title}
            </button>
        </div>
    )
}
