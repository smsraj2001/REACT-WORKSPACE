import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(email, uname, pass);
    };

    const addUser = (email, uname, pass) => {
        axios.post('http://localhost:5000/Users', {
            email: email,
            username: uname,
            password: pass,
            role: "user"
        })
            .then((response) => {
                console.log('User added successfully:', response.data);
                alert(`Welcome ${email} !!! Please sign in to continue`);
                setEmail('');
                setUname('');
                setPass('');
                navigate("/login");
            })
            .catch((error) => {
                console.error('Error adding user:', error);
            });
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
                    <h2 className="card-title text-center mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type='email'
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
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
                            <button className="btn btn-primary" type='submit'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
