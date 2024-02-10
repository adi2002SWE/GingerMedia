import React, { useState} from 'react';

import "./LogIn.css";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Perform login logic here, such as sending data to backend
      console.log('Login:', username, password);
      // Redirect to profile page after successful login
      // You can use React Router for navigation
    };
  
    return (
      <div className='login-container'>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

export default Login;

