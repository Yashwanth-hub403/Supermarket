import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { getData } from '../Api';
import { Context } from './GlobeData';

const Login = () => {
  const { LogIn } = useContext(Context);
  const navigate = useNavigate();
  const [usernames, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpClick = () => {
    navigate('/Signup');
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await getData();
      setData(res.data);
    };
    fetch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (usernames === '' && password === '') {
      alert('Please enter both username and password');
    } else if (password === '') {
      alert('Please enter Password');
    } else if (usernames === '') {
      alert('Please enter username');
    } else {
      const userIndex = data ? data.findIndex(({ username }) => username === usernames) : -1;
      if (userIndex === -1) {
        alert('Invalid username');
        console.log(userIndex);
      } else if (data[userIndex]. password !== password) {
        alert('Invalid password');
        console.log(userIndex);
      } else {
        LogIn(data[userIndex]);
        navigate('/HomePage');
      }
    }
  };

  return (
    <div className="LoginPage">
      <div className="LoginImage">
        {/* {loggedIn ? <p>Hello</p> : <h1>Login</h1>} */}
      </div>
      <div className="LoginContainer">
        <h1 className="project_title">Monkey Mart</h1>
        <h1>Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" placeholder="Enter Username" onChange={handleUsernameChange} />

          <label>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
            onChange={handlePasswordChange}
          />
          <div className='showpassword'>
            <input
              type="checkbox"
              id="showPasswordCheckbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPasswordCheckbox">Show Password</label>
          </div>

          <button type="submit">Login</button>
          <p>
            Don't have an account? <button type="button" onClick={handleSignUpClick}>SignUp</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
