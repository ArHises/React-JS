import "./App.css";
import Comments from "./Comments.jsx";

const commentsList = [
  { id: 1, text: "Это первый комментарий" },
  { id: 2, text: "Это второй комментарий" },
  { id: 3, text: "Это третий комментарий" },
];

function App() {
  return (
    <>
      <Comments commentsList={commentsList} />
    </>
  );
}

export default App;
