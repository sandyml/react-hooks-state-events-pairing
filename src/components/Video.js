import React from 'react';
import VideoDetails from './VideoInfo';
import VideoComments from './VideoComments'
// import videoData from '../data/videoData';

function Video(props) {
    // console.log("Video.js", props)
    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={props.videoData.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <VideoDetails 
                title={props.videoData.title} 
                viewCount={props.videoData.views} 
                createdAt={props.videoData.createdAt} 
                upvotes={props.videoData.upvotes}
                downvotes={props.videoData.downvotes}
            />
            <VideoComments comments={props.videoData.comments} />
      </div>
    )
}

export default Video;