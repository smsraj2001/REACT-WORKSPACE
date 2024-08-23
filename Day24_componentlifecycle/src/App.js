import React, { Component } from 'react'
import VehicleComponent from './VehicleComponent'

export class App extends Component {
  constructor()
  {
      super();
      console.log("Constructor Called")
      this.state = {show : true}
  }

  componentDidMount()
  {
      console.log("Component Did Mount Called")
  }
  render() {
    console.log("Render is Called")
    return (
      <div>
        <h1>App</h1>
        {this.state.show ? <VehicleComponent/> : null}
        <button onClick={() => this.setState({show : !this.state.show})}>Toggle</button>
        {/* <button onClick={() => this.state.show : !this.state.show}>Toggle</button> */}
      </div>
    )
  }
}

export default App