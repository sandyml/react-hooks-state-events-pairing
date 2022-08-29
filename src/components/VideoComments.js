import React from 'react';
import videoData from '../data/videoData';
import VideoComment from './VideoComment'

function VideoComments(props) {
    // console.log("VideoComments", props)
    function renderComments() {
        return props.comments.map((comment, index) => {
            return ( 
                <VideoComment key={index} comment={comment} />
            )
        })
    }
    return (
        <div id="video-comments-container">
            <h2>{videoData.comments.length} Comments</h2>
        {renderComments()}
        </div>
    )
}

export default VideoComments;