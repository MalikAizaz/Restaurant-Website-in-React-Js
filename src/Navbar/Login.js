// src/Login.js

import React, { useState } from 'react';
import './Login.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Footer from '../Footer/Footer';
import Background from '../Backgroung Image/Background';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Perform login logic (e.g., API call, authentication)
    // For demonstration purposes, just log the username and password
    console.log(`Login with username: ${username}, password: ${password}`);

    window.location.replace('/');

    // Clear input fields and error state
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <>
    {/* <div className='background-container'> */}
    {/* <Background/> */}
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            placeholder='Enter Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="foooter">
    Don't have an account?<a href='http://localhost:3000/Signup'>Sign Up</a>

<p>© 2009-2024 - Simplilearn Solutions. All Rights Reserved. |<a href='#'> Privacy Policy</a></p>
    </div>
    </div>
    {/* </div> */}
    
   
    </>
  );
};

export default Login;
