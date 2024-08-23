import React from 'react'

const Condition2 = () => {
    const loggedIn = true;
  return (
    <div>
        <h1> Using ternary operator</h1>
        {
            loggedIn ? <h2> Eligible </h2> : <h2> Not Eligible </h2>
        }
    </div>
  )
}

export default Condition2