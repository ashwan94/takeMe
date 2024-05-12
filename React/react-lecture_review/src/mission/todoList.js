import { useState } from "react";
import "../css/todoCss.css";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState([]);

  const titleOnChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentOnChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const goAddTodo = () => {
    if (title == "" || content == "") {
      alert("제목, 내용 모두 입력해주세요");
      return;
    }
    setTodoList([...todoList, { title: title, content: content }]);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <div className="todo-body">
        <input
          type="text"
          onChange={titleOnChangeHandler}
          placeholder="Title"
          style={{ width: "150px", height: "50px", marginBottom: "10px" }}
          value={title}
        />
        <input
          type="text"
          onChange={contentOnChangeHandler}
          placeholder="Content"
          style={{ width: "150px", height: "50px", marginBottom: "10px" }}
          value={content}
        />
        <button onClick={goAddTodo}>ADD</button>
        <div>todo list</div>
        <ol className="alternating-colors todo-ol">
          {todoList.map((v, i) => {
            return (
              <li key={i} className="todo-li">
                <strong>{v.title}</strong>
                <p>{v.content}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};
export default TodoList;
