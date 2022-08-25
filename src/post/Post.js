import React from "react";
import "./Post.css";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { Comment} from "../comment/Comment";
import moment from "moment";

export function Post(props) {

    const { title, author, time, numberComments, ups } = props;

    return (
        <div className="post-item">
            <div className="buttons-container">
                <button type="button" className="button" >
                    <TiArrowSortedUp id="like-button" />
                </button>
                <p>{ups}</p>
                <button type="button" className="button" >
                    <TiArrowSortedDown id="dislike-button" />
                </button>
            </div>
            <div className="post-body" >
                <h3 className="post-title">{title}</h3>
                <div className="post-details">
                    <p>Posted by <b>{author}</b></p>
                    <p>At {moment.unix(time).fromNow()}</p>
                    <Comment numberComments={numberComments}/>
                </div>
            </div>
        </div>
    )
}