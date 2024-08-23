import React, { Component } from 'react'

export default class VehicleComponent extends Component {
    componentWillUnmount()
    {
        console.log("Component Will Unmount Called")
    }
    // constructor()
    // {
    //     super();
    //     console.log("Constructor Called")
    // }

    // componentDidMount()
    // {
    //     console.log("Component Did Mount Called")
    // }
  render() {

    return (
      <div>
        <h1>Vehicle Component</h1>
      </div>
    )
  }
}
