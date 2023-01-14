
import Comment from "./Comment";


const Comments = ({ videoComments }) => {
    



    const commentsList = videoComments.map((comment) =>

        <Comment
            key={comment.id}
            name={comment.user}
            text={comment.comment}
        />
    )
    console.log(videoComments);
    console.log(commentsList);


    return (
        <>
            <h2>{videoComments.length} Comments</h2>
            {commentsList}
        </>
    )
}

export default Comments;