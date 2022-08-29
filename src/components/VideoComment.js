import React from 'react';

function VideoComment(props) {
    console.log("VideoComment", props.comment)
    return (
        <div>
            <hr></hr>
            <h3>{props.comment.user}</h3>
            <p>{props.comment.comment}</p>
        </div>
    )
}

export default VideoComment;