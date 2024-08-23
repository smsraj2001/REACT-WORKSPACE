import logo from './logo.svg';
import './App.css';
import Vehicle from './Vehicle';
import React from 'react'

function App() {

  const[msg, setMsg] = React.useState("");
  const[msg2, setMsg2] = React.useState("");

  let display = () =>
  {
    alert("I am parent alert component.");
  }

  let display2 = (data) =>
  {
    // alert(data);
    setMsg(data);
  }

  let display3 = (data) =>
  {
    // alert(data);
    setMsg2(data);
  }

  return (
    <div className="App" style = {{backgroundColor : "red"}}>
      <h1>App Component -- Parent Component</h1>
      <p>Value of message: {msg}</p>
      <p>Value of input bar: {msg2}</p>
      <Vehicle callalert = {display} name = "sutharsan" calldata = {display2} callinput = {display3}/>
    </div>
  );
}

export default App;
