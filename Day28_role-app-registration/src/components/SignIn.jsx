import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [users, setUsers] = useState([]);
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/Users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    function validateUser(e) {
        e.preventDefault();

        if (users.length === 0) return;

        let isValidUser = false;

        for (const user of users) {
            const { email: emailjs, username: unamejs, password: passjs, role: rolejs } = user;

            if (uname === unamejs && pass === passjs) {
                if (rolejs === "admin" || rolejs === "user") {
                    alert(`Hello ${emailjs} !!! Press OK to continue`);
                    const user = { uname, pass, role: rolejs };
                    localStorage.setItem("user", JSON.stringify(user));
                    navigate("/home");
                    isValidUser = true;
                    break;
                }
            }
        }

        if (!isValidUser) {
            alert('Invalid User');
            localStorage.setItem("user", false);
        }
    }

    const logout = () => {
        localStorage.setItem("user", false);
        navigate('/login');
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-image bg-light"
            style={{
                backgroundImage: "url('Pictures/background.jpg')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh', 
                width: '100%'
            }}>
            <div className="d-flex justify-content-center align-items-center bg-image" style={{ backgroundImage: "url('Pictures/background.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
                <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                    <img src="Pictures/tvslogo.jpg" className="card-img-top img-fluid" alt="TVS MOTORS" />
                    <h2 className="card-title text-center mb-4">Sign In</h2>
                    <form onSubmit={validateUser}>
                        <div className="mb-3">
                            <label htmlFor="uname" className="form-label">Username</label>
                            <input
                                type='text'
                                id='uname'
                                value={uname}
                                onChange={(e) => setUname(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass" className="form-label">Password</label>
                            <input
                                type='password'
                                id='pass'
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type='submit'>Login</button>
                            <button className="btn btn-outline-success" type="button" onClick={() => navigate('/signup')}>Sign Up</button>
                            <button className="btn btn-outline-danger" type="button" onClick={logout}>Logout</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    );
};

export default Login;
