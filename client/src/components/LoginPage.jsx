// LoginPage.jsx
import React, { useState } from 'react';
import '../styles/LoginPage.css';
import { Link } from "react-router-dom";


function LoginPage({onLogin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    onLogin();
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div className="separator">
        <b>Or</b>
      </div>
      <Link to="/SignUpPage">
      <button className="signup-button">Sign Up</button>
      </Link>
    </div>
  );
}

export default LoginPage;