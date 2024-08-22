// import React from 'react'

// const CounterComponent = () => {

//   let count = 0

//   const increment = () => {
//     // count = count + 1
//     // console.log(count)
//     document.getElementById("h1").innerHTML = "Count: " + count++
//   }

//   const decrement = () => {
//     // count = count - 1
//     // console.log(count)
//     document.getElementById("h1").innerHTML = "Count: " + count--
//   }

//   const display = () => {
//     alert("You have clicked the button.")
// }   
//   return (
//     <div>
//         <h1>Counter App</h1>
//         <button className = "btn btn-primary" onClick={display}>Click Me</button>
//         <button className = "btn btn-success" onClick={increment}>Increment</button>
//         <button className = "btn btn-danger" onClick={decrement}>Decrement</button>
//         <h3 id = "h1">Count: {count}</h3>
//         </div>
//   )

// }

// export default CounterComponent

import React from 'react'

const CounterComponent = () => {

  const [count, setCount] = React.useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  const display = () => {
    alert("You have clicked the button.")
  }
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <div className="card-title">

                  <h1>Counter App</h1>
                </div>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <button className="btn btn-primary me-2" onClick={display}>Click Me</button>
                  <button className="btn btn-success me-2" onClick={increase}>Increase</button>
                  <button className="btn btn-danger" onClick={decrease}>Decrease</button>
                </div>
              </div>
              <div className="card-footer">
                <p className="display1">Current Speed: {count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default CounterComponent