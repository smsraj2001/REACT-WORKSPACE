import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); // Track the index being edited
  const [editText, setEditText] = useState(""); // Track the new text for the to-do being edited

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditText(todos[index].text);
  };

  const handleUpdateTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editText.trim();
    setTodos(updatedTodos);
    setEditingIndex(null); 
    setEditText(""); 
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={() => handleUpdateTodo(index)}>Save</button>
                  <button onClick={() => 
                    {
                        setEditingIndex(null)
                        setEditText(""); 
                    }
                  } 

                  >Cancel</button>
                </>
              ) : (
                <span
                  style={{
                    marginRight: "10px",
                    textDecoration: todo.checked ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
              )}
            </div>
            <button
              style={{ marginTop: "5px", marginBottom: "5px" }}
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
            {!editingIndex && (
              <button onClick={() => handleEditClick(index)}>Edit</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
