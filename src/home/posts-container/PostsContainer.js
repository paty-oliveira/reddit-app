import React from "react";
import "./PostsContainer.css";

export function PostsContainer() {
    return (
        <div className="post-container">
            <div className="post-item">
                <div className="buttons-container">
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
                <div className="post-body" >
                    <h3 className="post-title">Title of the post</h3>
                    <div className="post-details">
                        <p>Posted by author1</p>
                        <p>At 1 hour ago</p>
                        <p>250 comments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
