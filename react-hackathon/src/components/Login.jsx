import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true'); 
      navigate('/home'); 
    } else {
      setSnackbarMessage('Invalid credentials');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };
  
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
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
      <div className="card p-4 shadow-lg justify-content-center align-items-center" style={{ maxWidth: '310px', width: '100%' }}>
        <div className="d-flex justify-content-center">
          <img
            src="logo/tvslogo.jpg"
            style={{ width: '200px', height: '100px' }}
            className="img-fluid mb-3"
            alt="TVS MOTORS"
          />
        </div>

        <h2 className="card-title text-center mb-4">Inventory & Sales</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type='submit'>Login</button>
          </div>
        </form>
      </div>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity} elevation={6} variant="filled">
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Login;
