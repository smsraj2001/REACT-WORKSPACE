import React from 'react';

function Question({ questionData, selectedOption, handleOptionChange, questionNumber }) {
  return (
    <div
      id={`question-${questionData.id}`}
      className="question-container mb-4 p-4 border rounded bg-light shadow-sm"
    >
      <h4 className="mb-3 text-primary">Question {questionNumber}: {questionData.question}</h4>
      <div className="form-group">
        {questionData.options.map(option => (
          <div key={option} className="form-check mb-2">
            <input
              type="radio"
              id={`${questionData.id}-${option}`}
              name={`question-${questionData.id}`}
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(questionData.id, option)}
              className="form-check-input"
            />
            <label
              htmlFor={`${questionData.id}-${option}`}
              className="form-check-label"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
