import logo from './logo.svg';
import './App.css';
import Vehicle from './Vehicle';
import React from 'react'

function App() {

  const[msg, setMsg] = React.useState("");
  const[msg2, setMsg2] = React.useState("");
  const[msg3, setMsg3] = React.useState(""); // This is the parent input value

  let display = () =>
  {
    alert("I am parent alert component.");
  }

  let display2 = (data) =>
  {
    setMsg(data);
  }

  let display3 = (data) =>
  {
    setMsg2(data);
  }

  let handleChange = (e) =>
  {
    setMsg3(e.target.value); // Update parent input value
  }

  return (
    <div className="App bg-danger text-white p-4">
      <h1 className="mb-4">App Component -- Parent Component</h1>
      <input 
        type="text" 
        className="form-control mb-3"
        onChange={handleChange} 
        placeholder="See dynamic text in Child"
      />
      <p className="bg-light text-dark p-2 rounded">Value of message: {msg}</p>
      <p className="bg-light text-dark p-2 rounded">Value of input bar of child: {msg2}</p>
      <Vehicle 
        callalert={display} 
        name="sutharsan" 
        calldata={display2} 
        callinput={display3} 
        text={msg3} 
        input3={msg3} 
      />
    </div>
  );
}

export default App;

// {
// import logo from './logo.svg';
// import './App.css';
// import Vehicle from './Vehicle';
// import React from 'react'

// function App() {

//   const[msg, setMsg] = React.useState("");
//   const[msg2, setMsg2] = React.useState("");
//   const[msg3, setMsg3] = React.useState(""); // This is the parent input value

//   let display = () =>
//   {
//     alert("I am parent alert component.");
//   }

//   let display2 = (data) =>
//   {
//     setMsg(data);
//   }

//   let display3 = (data) =>
//   {
//     setMsg2(data);
//   }

//   let handleChange = (e) =>
//   {
//     setMsg3(e.target.value); // Update parent input value
//   }

//   return (
//     <div className="App" style = {{backgroundColor : "red"}}>
//       <h1>App Component -- Parent Component</h1>
//       <input type = "text" onChange = {handleChange} placeholder='See dynamic text in Child'/>
//       <p>Value of message: {msg}</p>
//       <p>Value of input bar of child: {msg2}</p>
//       <Vehicle callalert = {display} name = "sutharsan" calldata = {display2} callinput = {display3} text={msg3} input3 = {msg3}/>
//     </div>
//   );
// }

// export default App;
// }