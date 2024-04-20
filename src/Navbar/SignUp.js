// src/SignUp.js

import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Perform signup logic (e.g., API call to register user)
    // For demonstration purposes, just log the signup details
    console.log(`Signup with username: ${username}, email: ${email}, password: ${password}`);

    window.location.replace('/login');
    // Clear input fields and error state
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <>
    {/* <div className='background-container'> */}
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            placeholder='Enter your username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder='Enter your password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="foooter">
      Already have an account?<a href='http://localhost:3000/login'>Login</a>

<p>© 2009-2024 - Simplilearn Solutions. All Rights Reserved. <a href='#'> Privacy Policy</a></p>
    </div>

    </div>

    {/* </div> */}
        
    </>
    
  );
};

export default SignUp;
