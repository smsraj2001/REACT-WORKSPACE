import React, { useEffect, useRef, useState } from "react";

const Todo = ({ id, name, completed, toggleTaskCompleted, deleteTask, editTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            editFieldRef.current.focus();
        }
    }, [isEditing]);

    const handleChange = (e) => {
        setNewName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newName.trim() === "") {
            alert("Please enter a task name.");
            return;
        }
        editTask(id, newName);
        setIsEditing(false);
    };

    const viewTemplate = (
        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
            <div className="form-check">
                <input
                    id={id}
                    type="checkbox"
                    className="form-check-input"
                    checked={completed}
                    onChange={() => toggleTaskCompleted(id)}
                />
                <label htmlFor={id} className={`form-check-label ${completed ? "text-decoration-line-through" : ""}`}>
                    {name}
                </label>
            </div>
            <div>
                <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => setIsEditing(true)}
                    ref={editButtonRef}
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteTask(id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );

    const editingTemplate = (
        <form className="py-2 border-bottom" onSubmit={handleSubmit}>
            <div className="row g-2 align-items-center">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        value={newName}
                        onChange={handleChange}
                        ref={editFieldRef}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
                <div className="col-auto">
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => {
                            setIsEditing(false);
                            setNewName(name);
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );

    return <li className="list-group-item">{isEditing ? editingTemplate : viewTemplate}</li>;
};

export default Todo;
