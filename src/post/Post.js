import React from "react";
import "./Post.css";
import { TiArrowSortedUp, TiArrowSortedDown, TiMessage } from "react-icons/ti";
import moment from "moment";
import { commentsFromMeirlId } from "../mocks/reddit_comments";
import { Comment } from "../comment/Comment";

export function Post(props) {

    const post = props.post;
    const url = "r/meirl/comments/wii02j/meirl/"; // To be replaced by post.permalink when Reddit API will be ready
    const comments = extractCommentsFromPost(commentsFromMeirlId, url);
    const showingComments = true;

    const renderComments = () => {
        if (showingComments) {
            return (
                <div className="comments-container">
                    {comments.map((comment) => (<Comment comment={comment}/>))}
                </div>
            )
        }

        return null;
    }

    return (
        <div className="post-item">
            <div className="buttons-container">
                <button type="button" className="button" >
                    <TiArrowSortedUp id="like-button" />
                </button>
                <p>{post.ups}</p>
                <button type="button" className="button" >
                    <TiArrowSortedDown id="dislike-button" />
                </button>
            </div>
            <div className="post-body" >
                <h3 className="post-title">{post.title}</h3>
                <div className="post-details">
                    <p>Posted by <b>{post.author}</b></p>
                    <p>At {moment.unix(post.time).fromNow()}</p>
                    <span className="post-comments-container">
                        <button type="button" className="comments-button" aria-label="Show comments">
                            <TiMessage />
                        </button>
                        <p id="comment-item">{post.numberComments}</p>
                    </span>

                </div>
                {renderComments()}
            </div>
        </div>
    )
}

export function extractCommentsFromPost(payload, url) {
    const comments = [];
    const commentsMetadata = payload[1].data.children

    commentsMetadata.map(
        comment => comments.push(
            {
                author: comment.data.author,
                body: comment.data.body,
                createdAt: comment.data.created
            }
        )
    )

    return comments;
}