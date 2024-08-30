import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const[role, setRole] = useState('')
    const navigate = useNavigate();

    function validateUser(e) {
        e.preventDefault(); // Prevent form submission
        if (uname === 'admin' && pass === 'admin') {
            alert('Valid Admin');
            // localStorage.setItem("user", true)
            // navigate('/home')
            // setRole('admin')
            const user = {uname, pass, role:"admin"}
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        } 

        else if(uname === 'user1' && pass === 'pass1')
        {
            alert("Valid User");
            setRole('user')
            // navigate('/home')
            const user = {uname, pass, role:"user"}
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        }

        else 
        {
            alert('Invalid User');
            localStorage.setItem("user", false)
        }
    }
    let logout = () => {
        localStorage.setItem("user", false)
        navigate('/login')
    }

    return (
        <div>
            <h1>Login</h1>
            <form className='form-control' onSubmit={validateUser}>
                <input
                    type='text'
                    placeholder='username'
                    id='uname'
                    value={uname}
                    onChange={(e) => setUname(e.target.value)
                    }
                    className="mb-2 me-2"
                    required
                />
                <input
                    type='password'
                    placeholder='password'
                    id='pass'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                />
                <br />
                <button className="btn btn-info" type='submit'>Login</button>
            </form>
            <button className="btn btn-danger" onClick={() => (localStorage.setItem("user", false))}>Logout</button>
            {/* <button onClick={logout}>Logout</button> */}
        </div>
    );
};

export default Login;
