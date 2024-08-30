import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions/counterActions';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state)

    console.log("Counter is: " + counter);

  return (
    <div>
        <h1> Counter App </h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <p>Value of counter: {counter}</p>
    </div>
  )
}

export default Counter