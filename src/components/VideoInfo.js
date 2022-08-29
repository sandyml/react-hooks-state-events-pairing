import React, {useState} from 'react';
import videoData from '../data/videoData';
// import VideoComments from './VideoComments';
 
function VideoInfo(props) {
   const [upvotes, setUpVotes] = useState(props.upvotes)
   const [downvotes, setDownVotes] = useState(props.downvotes)
//    const [isHidden, setIsHidden] = useState(true)
 
   // console.log("VideoDetails", props)
 
   // LikeClick Button Function
   function handleLikesClick() {
       let likesVideo = {...upvotes};
       likesVideo.upvotes = likesVideo.upvotes + 1;
       setUpVotes(likesVideo)
   }
  
   // DislikeClick Button Function
   function handleDislikesClick() {
       let dislikeVideo = {...downvotes};
       // dislikeVideo.downvotes = video.downvotes - 1 // note: to remove likes
       dislikeVideo.downvotes = dislikeVideo.downvotes + 1
       setDownVotes(dislikeVideo)
   }
   // Hidden Comments Function
   function handleHiddenToggle(event) {
    //    setIsHidden(!isHidden)
    let commentsContainer = document.getElementById('video-comments-container');
    commentsContainer.classList.toggle("hidden")
    if (event.target.innerText === "Hide Comments") {
        event.target.innerText = "Show Comments"
    } else {
        event.target.innerText = "Hide Comments"
   }
}

   return (
       <div>
           <h1>{videoData.title}</h1>
           <p>{videoData.Count} VIEWS | UPLOADED {videoData.createdAt}</p>
           <button id="upvote-button" onClick={handleLikesClick}>{upvotes}👍</button>
           <button id="downvote-button"onClick={handleDislikesClick}>{downvotes}👎</button>
           <br></br><br></br>
           <button id="toggle-comments-button"onClick={handleHiddenToggle}>Hide Comments</button>
       </div>
   )
}




export default VideoInfo;
