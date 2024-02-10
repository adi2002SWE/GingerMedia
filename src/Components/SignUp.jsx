import { useState } from "react";
import React from "react";
import "./LogIn.css";
import axios from 'axios';

const Signup =() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = (e) => {
      console.log('Signup:', username, password);
      e.preventDefault()
      axios.post('', {username, password})
      .then(result => console.log(result))
      .catch(err => console.log(err))

    };
  
    return (
      <div className="login-container">
        <h2>Signup</h2>
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
        <button onClick={handleSignup}>Signup</button>
      </div>
    );
  }

export default Signup;
