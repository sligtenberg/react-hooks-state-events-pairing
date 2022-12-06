import React, {useState} from "react";
import Comment from "./Comment"

function Comments({ comments }) {

    const [showComments, setShowComments] = useState(true)
    const commentButtonText = showComments ? "Hide Comments" : "Show Comments"

    const commentComponents = showComments ? comments.map(comment => <Comment key={comment.id} user={comment.user} text={comment.comment}/>) : null

    return (
        <div>
            <button onClick={() => setShowComments(!showComments)}>{commentButtonText}</button>
            <h2>{comments.length} Comments</h2>
            {commentComponents}
        </div>
    )
}

export default Comments