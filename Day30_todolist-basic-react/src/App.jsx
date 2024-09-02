import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const listHeadingRef = useRef(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios
      .get("http://localhost:3000/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  };

  const addTask = (name) => {
    const newTask = { name, completed: false };
    axios
      .post("http://localhost:3000/tasks", newTask)
      .then((response) => setTasks([...tasks, response.data]))
      .catch((error) => console.error("Error adding task:", error));
  };

  const toggleTaskCompleted = (id) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate) {
      axios
        .patch(`http://localhost:3000/tasks/${id}`, {
          completed: !taskToUpdate.completed,
        })
        .then((response) => {
          setTasks(
            tasks.map((task) =>
              task.id === id ? response.data : task
            )
          );
        })
        .catch((error) => console.error("Error updating task:", error));
    }
  };

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:3000/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  const editTask = (id, newName) => {
    axios
      .patch(`http://localhost:3000/tasks/${id}`, { name: newName })
      .then((response) => {
        setTasks(
          tasks.map((task) =>
            task.id === id ? response.data : task
          )
        );
      })
      .catch((error) => console.error("Error editing task:", error));
  };

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        key={task.id}
        id={task.id}
        name={task.name}
        completed={task.completed}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Todo App</h1>
          <Form addTask={addTask} />
          <div className="mb-4 d-flex justify-content-center">
            {filterList}
          </div>
          <h2
            id="list-heading"
            tabIndex="-1"
            ref={listHeadingRef}
            className="h5 text-center mb-4"
          >
            {headingText}
          </h2>
          <ul className="list-group">{taskList}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
