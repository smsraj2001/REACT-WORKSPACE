import React, { useContext } from 'react';
import { UserContext } from '../App';

const Increment = () => {
  const { counter, setCounter } = useContext(UserContext);

  const handleIncrement = () => {
    setCounter(counter + 5);
  };

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>This is Increment Component</h1>
      <button onClick={handleIncrement} className='btn btn-success mb-2'>Increase</button>
    </div>
  );
};

export default Increment;
