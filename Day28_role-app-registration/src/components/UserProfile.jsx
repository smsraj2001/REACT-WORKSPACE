import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser) {
            axios.get('http://localhost:5000/Users')
                .then(response => {
                    const users = response.data;
                    const currentUser = users.find(user => user.username === storedUser.uname);
                    if (currentUser) {
                        setUserDetails(currentUser);
                    } else {
                        handleLogout();
                    }
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                    handleLogout();
                });
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate('/login');
    };

    if (!userDetails) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="container mt-5 col-md-6 offset-md-3">
            <h1 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#333' }}>Profile</h1>
            <div className="bg-light p-4 rounded shadow-sm border border-secondary">
                <div className="mb-3">
                    <label className="form-label" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#555' }}>Username</label>
                    <p className="form-control-plaintext" style={{ fontSize: '1.2rem', color: '#333' }}>{userDetails.username}</p>
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#555' }}>Email</label>
                    <p className="form-control-plaintext" style={{ fontSize: '1.2rem', color: '#333' }}>{userDetails.email}</p>
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#555' }}>Phone</label>
                    <p className="form-control-plaintext" style={{ fontSize: '1.2rem', color: '#333' }}>{userDetails.phone || 'N/A'}</p>
                </div>
                <div className="d-grid">
                    <button onClick={handleLogout} className="btn btn-danger btn-lg" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
