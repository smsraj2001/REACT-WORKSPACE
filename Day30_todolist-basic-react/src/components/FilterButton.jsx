import React from "react";

const FilterButton = ({ name, isPressed, setFilter }) => {
  return (
    <button
      type="button"
      className={`btn btn-outline-primary me-2 ${isPressed ? "active" : ""}`}
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      {name}
    </button>
  );
};

export default FilterButton;