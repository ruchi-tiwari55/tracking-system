import React, { useState } from 'react'
import Forget from './Forget'
import styles from '../../styles/outerPages/login.module.css'
import { Link } from 'react-router-dom';

const LoginForm = ({ toggleSignupForm }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const checkEmailerr = () => {
    if (email == '') {
      setEmailError('Email required*')
    }
  }
  const checkpasswderr = () => {
    if (password == '') {
      setPasswordError('Password required*')
    }
  }
  const [showForgetForm, setShowForgetForm] = useState(false);
  const toggleForgetForm = () => {
    setShowForgetForm(!showForgetForm);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    alert("Login successful");
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
            setEmail(e.target.value)
            setEmailError('')
          }}
          required
        />
        {emailError && <p style={{ fontSize: "small", color: "red", marginTop: "-1rem" }}>{emailError}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onBlur={checkpasswderr}
          onChange={(e) => {
            setPassword(e.target.value)
            setPasswordError('')
          }}
          required
        />
        {passwordError && <p style={{ fontSize: "small", color: "red", marginTop: "-1rem" }}>{passwordError}</p>}

        <Link to="/dashboard" style={{margin:"auto"}}><button type="submit" className={styles.login_btn}>Log In</button>
        </Link>
        <p className={styles.forget_p} onClick={toggleForgetForm}>Forgotten password?</p>
        <div>{showForgetForm && <Forget toggleForgetForm={toggleForgetForm} />}</div>
        <hr />

        <button onClick={toggleSignupForm} type="button" className={styles.create_account_btn}>Create New Account</button>
      </form>
    </div>
  )
}

export default LoginForm