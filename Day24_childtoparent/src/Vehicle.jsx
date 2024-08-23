import React from 'react'

const Vehicle = (props) => {
    let data = "Hello World, TVS vehicle in child";
  return (
    <div style = {{backgroundColor : "yellow"}}>
        <h1>Vehicle Component -- Child Component</h1>

        <button onClick={props.callalert}>Click Me in Child -- Call Alert</button>
        <button onClick={() => props.calldata(data)}>Click Me in Child -- Send Data</button>
        <br />
        <input type = "text"
        // value = {props.change}
        onChange = {(e) => props.callinput(e.target.value)}
        />

        <p>Value from parent: {props.name}</p>
    </div>
  )
}

export default Vehicle