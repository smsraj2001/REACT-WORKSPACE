import React, { useContext } from 'react';
import { UserContext } from '../App';

const Show = () => {
  const { counter } = useContext(UserContext);

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h1>This is Display Component</h1>
      <p><strong>The current value is: {counter}</strong></p>
    </div>
  );
};

export default Show;
