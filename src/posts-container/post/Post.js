import React, {useEffect, useState} from "react";
import "./Post.css";
import { TiArrowSortedUp, TiArrowSortedDown, TiMessage } from "react-icons/ti";
import moment from "moment";
import { Comment } from "../../comment/Comment";
import { getPostComments } from "../../api/reddit";

export function Post(props) {

    const post = props.post;
    const [upsCount, setUpsCount] = useState(post.ups);
    const [postComments, setPostComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        getPostComments(post.commentsUrl)
            .then(comments =>
                setPostComments(comments))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postComments])

    const handleVoteUp = event => {
        setUpsCount(upsCount + 1);
    }

    const handleVoteDown = event => {
        setUpsCount(upsCount - 1);
    }

    const handleCommentsButtonClick = event => {
        setShowComments(!showComments);
    }

    const renderComments = () => {
        if (showComments) {
            return (
                <div className="comments-container">
                    {postComments.map((comment) => (<Comment comment={comment}/>))}
                </div>
            )
        }

        return null;
    }

    return (
        <div className="post-item">
            <div className="buttons-container">
                <button
                    type="button"
                    className="button"
                    onClick={handleVoteUp}>
                    <TiArrowSortedUp id="like-button" />
                </button>
                <p>{upsCount}</p>
                <button
                    type="button"
                    className="button"
                    onClick={handleVoteDown}>
                    <TiArrowSortedDown id="dislike-button" />
                </button>
            </div>
            <div className="post-body" >
                <h3 className="post-title">{post.title}</h3>
                <div className="post-details">
                    <p>Posted by <b>{post.author}</b></p>
                    <p>At {moment.unix(post.time).fromNow()}</p>
                    <span className="post-comments-container">
                        <button
                            type="button"
                            className="comments-button"
                            aria-label="Show comments"
                            onClick={handleCommentsButtonClick}>
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
