function ToDoItem({ todos, setTodos, index }) {
  const todoInput = todos[index];

  const handleClickUp = () => {
    console.log("up");
    console.log({ index });
    if (index === 0) return;
    const newTodos = [...todos];
    const temp = newTodos[index - 1];
    newTodos[index - 1] = newTodos[index];
    newTodos[index] = temp;
    console.log({ newTodos });
    setTodos(newTodos);
  };

  const handleClickDown = () => {
    if (index === todos.length - 1) return;
    const newTodos = [...todos];
    const temp = newTodos[index + 1];
    newTodos[index + 1] = newTodos[index];
    newTodos[index] = temp;
    setTodos(newTodos);
  };

  const handleClickDelete = () => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <>
      <div className="todo-item">
        <p>{todoInput}</p>
        <button class="icon-button" onClick={handleClickDelete}>
          <i class="fas fa-save"></i>Delete
        </button>
        <button class="icon-button" onClick={handleClickUp}>
          Up
        </button>
        <button class="icon-button" onClick={handleClickDown}>
          Down
        </button>
      </div>
    </>
  );
}

export default ToDoItem;
