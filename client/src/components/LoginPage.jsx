import React, { useState } from 'react';
import '../styles/LoginPage.css';
import armyimage from '../assets/armyimage.png';
import armyImageWhite from '../assets/armyImageWhite.png';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just for demo: logs credentials and calls onLogin()
    console.log('Username:', username);
    console.log('Password:', password);
    onLogin();
  };

  return (
    <div className="centered-page">
      <div className="login-container">
        {/* Army Logo */}
        <img src={armyImageWhite} alt="U.S. Army Logo" className="army-logo" />

        {/* Main Heading */}
        <h2>Log In</h2>

        {/* Small, single-line disclaimer text */}
        <p className="disclaimer">
          For official use by authorized U.S. Army personnel.
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
