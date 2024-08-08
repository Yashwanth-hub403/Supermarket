import React from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { postData } from '../Api';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [role, setRole] = React.useState('User'); // Default role is User

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    if (username === '' || password === '' || email === '' || confirmPassword === '') {
      alert('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    postData(username, email, password, confirmPassword,role);
    alert('Successfully registered');
    navigate('/Login');
    window.location.reload();
  };

  return (
    <div className="signup_page">
      <div className="signup_image"></div>
      <div className="signup_container">
        <h1>Signup</h1>
        <div className="signup_form_div">
          <form className="signup_form" onSubmit={handleSignup}>
            <label>Role</label>
            <select value={role} onChange={handleRoleChange}>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
            
            <label>Username</label>
            <input type="text" placeholder="Enter Username" onChange={handleUsernameChange} />
            
            <label>Email</label>
            <input type="email" placeholder="Enter Email" onChange={handleEmailChange} />
            
            <label>Password</label>
            <input type="password" placeholder="Enter Password" onChange={handlePasswordChange} />
            
            <label>Confirm Password</label>
            <input type="password" placeholder="Enter Confirm Password" onChange={handleConfirmPasswordChange} />
            
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
