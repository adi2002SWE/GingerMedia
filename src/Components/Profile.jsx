import React, { useState } from 'react';
import "./LogIn.css";
const Profile = () => {
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [contact, setContact] = useState('');
  
    const handleUpdate = () => {
      // Perform update logic here, such as sending data to backend
      console.log('Update Profile:', age, dob, contact);
    };
  
    return (
      <div className='login-container'>
        <h2>Profile</h2>
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    );
  }
export default Profile;
