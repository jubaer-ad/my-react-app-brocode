import { useState } from "react";
import ToDoItem from "./TodoItem";
function ToDo() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = () => {
    const newToDos = { ...todos, todoInput };
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleOnChangeToDoInput = (e) => {
    setTodoInput(e.target.value);
  };
  return (
    <>
      <div className="todo-div">
        <h2>ToDo App</h2>
        <input
          type="text"
          value={todoInput}
          placeholder="Enter a todo"
          onChange={handleOnChangeToDoInput}
          onKeyDown={handleInputKeyDown}
        />
        <button className="todo-add-button" onClick={handleAddTodo}>Add</button>
        <ul>
          {todos.map((_, i) => (
            <ToDoItem
              key={i}
              todos={todos}
              setTodos={(todos) => setTodos(todos)}
              index={i}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDo;
