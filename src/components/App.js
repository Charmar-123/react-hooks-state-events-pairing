import VideoPlayer from "./video_component";
import video from "../data/video";
import Comments from "./Comments";
import { useState } from "react";

function App() {

      const [showCommentsList, setShowCommentsList] = useState(true)

      const handleCommentClick = () => {
        setShowCommentsList(!showCommentsList)
      }

      const commentsList = showCommentsList ? video.comments : [];


  return (
    <div className="App">
      <VideoPlayer video={video} handleCommentClick={handleCommentClick} showCommentsList={showCommentsList}/>
      <hr></hr>
      <Comments videoComments={commentsList} />
    </div>
  );
}

export default App;
