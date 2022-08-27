import React from "react";
import "./Comment.css";
import moment from "moment";

export function Comment(props) {

    const comment = props.comment;

    return (
        <div className="comment-item">
            <div className="comment-info">
                <p><b>{comment.author}</b></p>
                <p>At {moment.unix(comment.createdAt).fromNow()}</p>
            </div>
            <div className="comment-content">
                <p>{comment.body}</p>
            </div>
        </div>
    )
}
