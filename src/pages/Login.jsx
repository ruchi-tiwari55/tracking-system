import React, { useState } from 'react';
import Signup from '../components/common/SignUp';
import LoginForm from '../components/common/LoginForm';
import Banner from '../components/common/Banner';
import Footer from '../components/common/Footer';
import Search from '../components/common/Search';
import styles from '../styles/outerPages/login.module.css'
import '../styles/globals.css'

function Login() {
  const [showSignupForm, setShowSignupForm] = useState(false);

  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Search />
          <Banner />
        </div>
        <div className={styles.right}>
          <LoginForm toggleSignupForm={toggleSignupForm} />
        </div>  
      </div>
      <Footer />
      {showSignupForm && <Signup toggleSignupForm={toggleSignupForm} />}
    </div>
  );
}

export default Login;
