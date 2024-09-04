import React, { useContext } from 'react';
import { UserContext } from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';

const Decrement = () => {
  const { counter, setCounter } = useContext(UserContext);

  const handleDecrement = () => {
    setCounter(counter - 5);
  };

  return (
    <div style={{ backgroundColor: "pink" }}>
      <h1>This is Decrement Component</h1>
      <button onClick={handleDecrement} className='btn btn-danger mb-2'>Decrease</button>
    </div>
  );
};

export default Decrement;
