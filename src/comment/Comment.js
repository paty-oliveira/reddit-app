import React from "react";
import "./Comment.css";

export function Comment(props) {

    return (
        <p>{props.numberComments} comments</p>
    )
}