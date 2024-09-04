import React, { useState } from 'react'

const Vehicle = () => {
    const[data, setData] = useState("Hello");

    let handleSubmit = (e) => {
        e.preventDefault();
    };
  return (
    <div style = {{backgroundColor : "pink"}}>
        This is Vehicle
        <p data-testid = "para1">this is para</p>

        <form onSubmit={handleSubmit}>
            <input type = "text"
             data-testid = "user" 
             id = "user"
             name = "user"
             placeholder='UserName'
             value = {data}
             onChange={(e) => setData(e.target.value)}
            />
            <br />
            <input type = "submit"
             />
        </form>
    </div>
  )
}

export default Vehicle