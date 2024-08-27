import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const [email, setEmail] = useState('');
    const [empId, setEmpId] = useState('');
    const [errors, setErrors] = useState({ email: '', empId: '' });
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate(); // Use useNavigate hook

    useEffect(() => {
        setFadeIn(true);
    }, []);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateEmpId = (empId) => {
        const empIdRegex = /^\d{5}$/; // Regex for exactly 6 digits
        return empIdRegex.test(empId);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (!validateEmail(newEmail)) {
            setErrors((prev) => ({ ...prev, email: 'Invalid email format' }));
        } else {
            setErrors((prev) => ({ ...prev, email: '' }));
        }
    };

    const handleEmpIdChange = (e) => {
        const newEmpId = e.target.value;
        setEmpId(newEmpId);

        if (!validateEmpId(newEmpId)) {
            setErrors((prev) => ({ ...prev, empId: 'Employee ID must be exactly 6 digits' }));
        } else {
            setErrors((prev) => ({ ...prev, empId: '' }));
        }
    };

    useEffect(() => {
        setIsFormValid(validateEmail(email) && validateEmpId(empId));
    }, [email, empId]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        if (isFormValid) {
            navigate('/quiz'); // Navigate to the quiz page
        }
    };

    return (
        <div className={`login-container ${fadeIn ? 'fade-in' : ''}`}>
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email ID:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="empId">Employee ID:</label>
                        <input
                            type="text"
                            id="empId"
                            placeholder="Enter your employee ID"
                            value={empId}
                            onChange={handleEmpIdChange}
                            required
                        />
                        {errors.empId && <div className="error">{errors.empId}</div>}
                    </div>
                    <button type="submit" className="submit-button" disabled={!isFormValid}>
                        Go to Quiz
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
