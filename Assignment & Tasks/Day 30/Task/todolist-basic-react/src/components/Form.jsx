import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    addTask(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="new-todo-input" className="form-label fw-bold">
          What needs to be done?
        </label>
        <input
          type="text"
          id="new-todo-input"
          className="form-control"
          name="text"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter task name"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
};

export default Form;
