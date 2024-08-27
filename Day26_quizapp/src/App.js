import React, { useEffect, useState } from 'react';
import AppLayout from './components/AppLayout';
import Question from './components/Question';
import Sidebar from './components/Sidebar';
import Result from './components/Result';
import LoginPage from './components/LoginPage';
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [quizData, setQuizData] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      // Reset state when navigating to the login page
      setAnswers({});
      setShowResult(false);
    }
  }, [location.pathname]);


  useEffect(() => {
    fetch('http://localhost:8000/quizData')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setQuizData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching quiz data:', error);
        setLoading(false);
      });
  }, []);

  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers({
      ...answers,
      [questionId]: selectedOption,
    });
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const calculateScore = () => {
    if (quizData.length === 0) return 0;

    return Object.keys(answers).reduce((score, questionId) => {
      const question = quizData.find(q => q.id === questionId);

      if (question) {
        const userAnswer = (answers[questionId] || '').trim().toLowerCase();
        const correctAnswer = (question.correctAnswer || '').trim().toLowerCase();

        if (userAnswer === correctAnswer) {
          return score + 1;
        }
      }
      return score;
    }, 0);
  };

  const score = calculateScore();

  if (loading) {
    return (
      <AppLayout>
        <div className="container mt-5">
          <h2>Loading quiz data...</h2>
        </div>
      </AppLayout>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/quiz" element={
        <AppLayout>
          {!showResult ? (
            <div className="d-flex flex-grow-1">
              <main className="flex-grow-1 pe-5">
                <div className="container mt-3">
                  {quizData.map((question, index) => (
                    <Question
                      key={question.id}
                      questionData={question}
                      selectedOption={answers[question.id]}
                      handleOptionChange={handleOptionChange}
                      questionNumber={index + 1} // Pass question number
                    />
                  ))}
                </div>
                <div className="text-center mt-4">
                  <button
                    className="btn btn-success"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </main>
              <Sidebar quizData={quizData} handleSubmit={handleSubmit} />
            </div>
          ) : (
            <div className="container mt-5">
              <Result
                score={score}
                total={quizData.length}
                correctAnswers={quizData} // Pass correct answers
                userAnswers={answers} // Pass user answers
              />
            </div>
          )}
        </AppLayout>
      } />

    </Routes>
  );
}

export default App;
