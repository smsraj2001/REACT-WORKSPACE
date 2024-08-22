import React from 'react'

const VehicleDetailsComponent = (props) => {
  return (
    <div>
        <h2>Vehicle Details Component</h2>
        <p>{props.vehicleobj.name}</p>
        <p>{props.vehicleobj.model}</p>
        <p>{props.vehicleobj.color}</p>
    </div>
  )
}

export default VehicleDetailsComponent