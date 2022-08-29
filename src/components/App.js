import React from 'react';
// import ReactDOM from "react-dom";
import videoData from "../data/videoData.js";
import Video from './Video';


// Video Component - Child App.js
// Video Information Compoenent - Child of Video.js
// Video Comments Compoenent - Child of Video.js
// Video Comment Compoenent - Child of VideoComments.js


function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video videoData={videoData} />
    </div>
  );
}

export default App;
