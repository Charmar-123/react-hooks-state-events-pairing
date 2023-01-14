
import { useState } from "react";

const VideoPlayer = ({video, handleCommentClick, showCommentsList}) => {

    const [likes, setLikes] = useState(video.upvotes)
    const [dislikes, setDislikes] = useState(video.downvotes)

    const handleLike = () => {
        setLikes(likes + 1)
    }

    const handleDislike = () => {
        setDislikes(dislikes - 1)
    }

    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <div>
            <button className="like-button" onClick={handleLike}>{likes} 👍</button>
            <button className="dislike-button" onClick={handleDislike}>{dislikes} 👎</button>
            </div>
            <button className="hide-comments" onClick={handleCommentClick}>{showCommentsList ? "Hide" : "Show"} Comments</button>
        </div>
    )
}

export default VideoPlayer;