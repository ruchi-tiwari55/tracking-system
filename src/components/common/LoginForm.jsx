import React, { useState } from 'react';
import Forget from './Forget';
import styles from '../../styles/outerPages/login.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';


const LoginForm = ({ toggleSignupForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showForgetForm, setShowForgetForm] = useState(false);
  const navigate = useNavigate();

  const toggleForgetForm = () => {
    setShowForgetForm(!showForgetForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        'https://lzycrazy-tracking-backend.onrender.com/v1/users/login',
        {
          email: email,
          password: password
        },
        {
          headers: {
            'Content-Type': 'application/json'
            // Add any other headers if required, such as authentication tokens
          }
        }
      );
  
      console.log('Login Response:', response.data);
      // You can handle the response here, maybe redirect the user to dashboard or show a success message
      
      navigate('/dashboard');
      alert('Login successful..');
    } catch (error) {
      console.error('Login Error:', error);
      // Handle login errors here, show an error message to the user, etc.
    }
  };
  

  const checkEmailerr = () => {
    if (email === '') {
      setEmailError('Email required*');
    }
  };

  const checkpasswderr = () => {
    if (password === '') {
      setPasswordError('Password required*');
    }
  };

  return (
    <div className={styles.login_form}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email address or phone number"
          value={email}
          onBlur={checkEmailerr}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError('');
          }}
          required
        />
        {emailError && <p style={{ fontSize: 'small', color: 'red', marginTop: '-1rem' }}>{emailError}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onBlur={checkpasswderr}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError('');
          }}
          required
        />
        {passwordError && <p style={{ fontSize: 'small', color: 'red', marginTop: '-1rem' }}>{passwordError}</p>}

        <button type="submit" className={styles.login_btn}>
          Log In
        </button>
        <p className={styles.forget_p} onClick={toggleForgetForm}>
          Forgotten password?
        </p>
        <div>{showForgetForm && <Forget toggleForgetForm={toggleForgetForm} />}</div>
        <hr />

        <button onClick={toggleSignupForm} type="button" className={styles.create_account_btn}>
          Create New Account
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
