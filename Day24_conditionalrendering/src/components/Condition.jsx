import React from 'react'

const Condition = () => {
    let age = 23;
    let showMessage;
    if(age > 23)
    {
        showMessage = <h2> You are eligible </h2>
    }
    else
    {
        showMessage = <h2> You are not eligible </h2>
    }
  return (
    <div>
        <h1> Conditional Rendering</h1>
        {1 + 1}
        {showMessage}
    </div>
  )
}

export default Condition