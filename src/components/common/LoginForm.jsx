import React, { useState } from 'react';
import Forget from './Forget';
import styles from '../../styles/outerPages/login.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { BASEURL } from '../../constants/constant';
const LoginForm = ({ toggleSignupForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showForgetForm, setShowForgetForm] = useState(false);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);



 
    

  const toggleForgetForm = () => {
    setShowForgetForm(!showForgetForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true)
    try {
      const response = await axios.post(
        `${BASEURL}/v1/users/login`,
        {
          email: email,
          password: password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    setLoader(false)
      toast.success(response?.data?.message);
      setLoader(false)
      console.log('Login Response:', response.data);
      // console.log('-----------', userData);

      navigate('/dashboard');
    } catch (error) {
      setLoader(false)

      toast.error(error?.response?.data.message);
      console.error('Login Error:', error);
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
    <div className={styles.login_form} style={{width:400}}>
      <div className={styles.app}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email address or phone number"
          value={email}
          style={{height:30}}

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
          style={{height:30}}
          onBlur={checkpasswderr}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError('');
          }}
          required
        />
        {passwordError && <p style={{ fontSize: 'small', color: 'red', marginBottom: '-1rem' }}>{passwordError}</p>}

        <button type="submit" className={styles.login_btn}>
          {/* Log In */}
          {loader ? (
        <span>Loading...</span>
      ) : (
        <span>Log In</span>
      )}
        </button>
        <p className={styles.forget_p} onClick={toggleForgetForm} style={{height:40}}>
          Forgotten password?
        </p>
        <div>{showForgetForm && <Forget toggleForgetForm={toggleForgetForm} />}</div>


        <button onClick={toggleSignupForm} type="button" className={styles.create_account_btn}>
          Create New Account
        </button>
      </form>
      </div>
    </div>
  );
};

export default LoginForm;
