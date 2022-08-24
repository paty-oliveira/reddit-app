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
                    <p>
                        {
                            new Date(time * 1000).toLocaleDateString()
                        }
                    </p>
                    <p>{numberComments} comments</p>
                </div>
            </div>
        </div>
    )
}