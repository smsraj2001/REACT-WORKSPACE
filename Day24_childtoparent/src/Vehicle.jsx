import React from 'react'

const Vehicle = (props) => {
  let data = "Hello World, TVS vehicle in child";
return (
  <div className="bg-warning text-dark p-4 rounded">
      <h1 className="mb-4">Vehicle Component -- Child Component</h1>

      <button className="btn btn-primary mb-3 me-2" onClick={props.callalert}>
        Click Me in Child -- Call Alert
      </button>
      <button className="btn btn-secondary mb-3" onClick={() => props.calldata(data)}>
        Click Me in Child -- Send Data
      </button>
      <br />
      <input 
        type="text" 
        className="form-control mb-3" 
        onChange={(e) => props.callinput(e.target.value)}
        placeholder="See dynamic text in Parent"
      />

      <p className="bg-light text-dark p-2 rounded">Value from parent: {props.name}</p>
      <p className="bg-light text-dark p-2 rounded">Value of input bar of parent by props.text: {props.text}</p> {/* Display parent input value here */}
      <p className="bg-light text-dark p-2 rounded">Value of input bar of parent by variable name: {props.input3}</p> {/* Display parent input value here */}
  </div>
)
}

export default Vehicle;

// {
//   import React from 'react'

// const Vehicle = (props) => {
//     let data = "Hello World, TVS vehicle in child";
//   return (
//     <div style = {{backgroundColor : "yellow"}}>
//         <h1>Vehicle Component -- Child Component</h1>

//         <button onClick={props.callalert}>Click Me in Child -- Call Alert</button>
//         <button onClick={() => props.calldata(data)}>Click Me in Child -- Send Data</button>
//         <br />
//         <input type = "text"
//         onChange = {(e) => props.callinput(e.target.value)}
//         placeholder='See dynamic text in Parent'
//         />

//         <p>Value from parent: {props.name}</p>
//         <p>Value of input bar of parent by props.text: {props.text} </p> {/* Display parent input value here */}
//         <p>Value of input bar of parent by variable name: {props.input3} </p> {/* Display parent input value here */}
//     </div>
//   )
// }

// export default Vehicle;
// }