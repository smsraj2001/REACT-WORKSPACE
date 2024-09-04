import React, { useState } from 'react'

const Counter = () => {
    const[count, setCount] = useState(0);
    let increment = () =>
    {
        setCount(count + 1);
    }
    let decrement = () =>
    {
        setCount(count - 1);
    }
  return (

    <div>
        <p data-testid = "counter">{count}</p>
        <button data-testId = "inc" onClick={increment}>Increment</button>
        <button data-testId = "dec" onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter