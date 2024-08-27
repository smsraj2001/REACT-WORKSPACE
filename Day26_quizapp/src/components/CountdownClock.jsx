import React, { useState, useEffect } from 'react';
 
const CountdownClock = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
 
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
 
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
 
    return () => clearInterval(timerId);
  }, [timeLeft, onTimeUp]);
 
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };
 
  return (
    <div className="countdown-clock">
      <p>{formatTime(timeLeft)}</p>
    </div>
  );
};
 
export default CountdownClock;