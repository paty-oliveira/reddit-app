import React from "react";
import "./Post.css";

export function Post(props) {

    const { title, author, time, numberComments } = props;

    return (
        <div className="post-item">
            <div className="buttons-container">
                <button>Like</button>
                <button>Dislike</button>
            </div>
            <div className="post-body" >
                <h3 className="post-title">{title}</h3>
                <div className="post-details">
                    <p>Posted by {author}</p>
                    <p>At {time} ago</p>
                    <p>{numberComments} comments</p>
                </div>
            </div>
        </div>
    )
}