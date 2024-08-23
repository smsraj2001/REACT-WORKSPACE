import React from 'react'

const Condition3 = () => {
    const [loggedIn, setLoggedIn] = React.useState(true);
    const handleClick = () => {
        setLoggedIn(!loggedIn)
    }


  return (
    <div>
    <button onClick={handleClick} className = "btn btn-primary">Click Me</button>
    {loggedIn ? <h2> Eligible </h2> : <h2> Not Eligible </h2>}
    </div>
  )
}

export default Condition3