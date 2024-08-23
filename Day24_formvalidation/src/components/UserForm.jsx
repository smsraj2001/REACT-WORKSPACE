import React from 'react'

const UserForm = () => {

    const[user, setUser]  = React.useState("");
    const[pass, setPass]  = React.useState("");
    const[userError, setUserError]  = React.useState(false);
    const[passError, setPassError]  = React.useState(false);

    let handleSubmit = (e) => 
    {
        // if(user.length <= 4 && pass.length <= 4)
        // {
        //     alert("Enter valid data");
        // }
        if(userError || passError)
        {
            alert("Enter valid data");
        }
        e.preventDefault();
        console.log("Form Submitted");
    }

    let userHandleChange = (e) => {
        // setUser(e.target.value);
        // console.log(user);
        // if(user.length < 4)
        // {
        //     console.log("INVALID USER....User name should be more than 4 characters");
        // }
        // else
        // {
        //     console.log("VALID USER....");
        // }

        let u = e.target.value;
        
        if(u.length > 4)
        {
            console.log("VALID USER....");
            setUser(u);
            setUserError(false);
        }
        else
        {
            console.log("INVALID USER....User name should be more than 4 characters");
            setUserError(true);
        }
    }

    let passwordHandleChange = (e) => {
        // setPass(e.target.value);
        // console.log(pass);
        let p = e.target.value;
        if(p.length > 4)
        {
            console.log("VALID PASSWORD....");
            setPass(p);
            setPassError(false);
        }
        else
        {
            console.log("INVALID PASSWORD....Password should be more than 4 characters");
            setPassError(true);
        }
    }

  return (
    <div>
        <h1>User Form</h1>
        <form onSubmit={handleSubmit} className = "form-control">
            <input type="text" 
            name="user" 
            id = "user"
            placeholder="User Name" 
            onChange = {userHandleChange}
            autoComplete='off'
            />

            {userError ? <span>Invalid User</span> : null}
            <br/>
            <input type = "password"
            name = "pass"
            id = "pass"
            placeholder = "Password"
            onChange = {passwordHandleChange}
            autoComplete='off'
            />
            {passError ? <span>Invalid User</span> : null}
            <br/>

            <button type="submit" onClick={handleSubmit} >Submit</button>
            {/* <input type = "button" value = "enter" /> */}
            <p> Username is {user}</p>
            <p> Password is {pass}</p>
        </form>
    </div>
  )
}

export default UserForm