import React from "react";
import video from "../data/video.js";
import Video from "./Video";
import Votes from "./Votes";
import Comments from "./Comments";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video source={video.embedUrl} title={video.title} views={video.views} date={video.createdAt}/>
      <Votes upVotesInitial={video.upvotes} downVotesInitial={video.downvotes} />
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;