import React from 'react';
import { useNavigate } from 'react-router-dom';

function Result({ score, total, correctAnswers, userAnswers }) {
  const navigate = useNavigate();


  return (
    <div className="text-center mt-5">
      <h2 className="mb-4">
        Your Score: <span className="badge bg-success">{score} / {total}</span>
      </h2>
      <h4 className="mb-4">Answers Review:</h4>
      <ul className="list-group">
        {correctAnswers && correctAnswers.length > 0 ? (
          correctAnswers.map((answer, index) => {
            const userAnswer = userAnswers && userAnswers[answer.id];
            const isCorrect = userAnswer
              ? userAnswer.toLowerCase().trim() === (answer.correctAnswer || '').toLowerCase().trim()
              : false;

            return (
              <li
                key={index}
                className={`list-group-item d-flex flex-column align-items-center ${
                  isCorrect ? 'bg-success text-white' : 'bg-danger text-white'
                }`}
              >
                <div className="text-center">
                  <div><strong>{index + 1}. {answer.question}</strong></div>
                  <div className="mt-2">
                    <div className="mb-2">
                      <span className={`badge ${isCorrect ? 'bg-success' : 'bg-danger'}`}>
                        Your Answer: {userAnswer || 'Not Answered'}
                      </span>
                    </div>
                    <div>
                      <span className={`badge ${'bg-dark'}`}>
                        Correct Answer: {answer.correctAnswer}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <li className="list-group-item">No answers to display</li>
        )}
      </ul>
      <button className="btn btn-info mt-2" onClick={() => navigate('/')}>
        Go To Home
      </button>
    </div>
  );
}

export default Result;
