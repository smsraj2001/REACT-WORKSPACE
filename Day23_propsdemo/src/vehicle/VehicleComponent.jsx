import React from 'react'

const VehicleComponent = (props) => {
  return (
    <div>
        <h2>Vehicle Component</h2>
        <p>The name of the Vehicle is {props.name}</p>
    </div>
  )
}

export default VehicleComponent