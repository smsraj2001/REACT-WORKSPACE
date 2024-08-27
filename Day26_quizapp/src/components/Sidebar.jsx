import React, { useState } from 'react';
import CountdownClock from './CountdownClock'; // Adjust the path as necessary

function Sidebar({ quizData = [], handleSubmit }) {  // Default to an empty array
  const [isTimeUp, setIsTimeUp] = useState(false);

  const handleTimeUp = () => {
    setIsTimeUp(true);
    alert("Time is up! Hurry!!"); // Show the alert when time is up
  };

  const handleNavigation = (questionId) => {
    const questionElement = document.getElementById(`question-${questionId}`);
    if (questionElement) {
      questionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="sidebar bg-light p-3 shadow-sm" style={{ width: '300px' }}> {/* Increase width */}
      <h4>Questions</h4>
      <CountdownClock duration={100} onTimeUp={handleTimeUp} /> {/* Set timer to 10 seconds */}
      <ul className="list-group mb-3">
        {quizData.length === 0 ? (
          <li className="list-group-item">No questions available</li>
        ) : (
          quizData.map((question) => (
            <li
              key={question.id}
              className="list-group-item"
              style={{ cursor: 'pointer' }}
              onClick={() => handleNavigation(question.id)} // Navigate to the specific question
            >
              Question {question.id}
            </li>
          ))
        )}
      </ul>
      <button
        className="btn btn-success w-100"
        onClick={handleSubmit}
        disabled={isTimeUp} // Disable the button if time is up
      >
        Submit
      </button>
    </aside>
  );
}

export default Sidebar;
