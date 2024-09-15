import { useState } from "react";

function Comments({ commentsList }) {
  // Destructure commentsList from props
  const [comments, setComments] = useState(commentsList);

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
