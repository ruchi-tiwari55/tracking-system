import React, { useState } from 'react';
import Signup from '../components/common/SignUp';
import LoginForm from '../components/common/LoginForm';
import Banner from '../components/common/Banner';
import Footer from '../components/common/Footer';
import Search from '../components/common/Search';
import styles from '../styles/outerPages/login.module.css';
import '../styles/globals.css';
// import LogoBg from '../../assets/updatedBanners/logobg.jpg';
import LogoBg from "../assets/updatedBanners/logobg.png"
import { Margin } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';


function Login() {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);
  };

  return (
    <>
{/* <div className={styles.container} style={{ overflow: 'hidden' }}> */}
<div className={styles.container} style={{ overflow: 'hidden' }}>
      
<div className={styles.app}>
    

    <div className={styles.container}>
      <div className={styles.left}>
        {/* <p>dfghj</p> */}
        <div className={styles.left}>
       

  
  <img src={LogoBg} style={{height:130, width:150, marginTop:-70}}/>
  
       
  
  <div  style={{hight:10,width:350, marginTop:-30}}>
  <Search />
  </div>
  <div  style={{hight:700,width:500,}}>
  <Banner />
  </div>
        
        <div className={styles.left} style={{height:240 ,marginTop:-5}}>
       
        
      
        <LoginForm toggleSignupForm={toggleSignupForm}/>
      </div>
      
        
      
        
        </div>
        
       
      </div>
      </div>
     
    </div>
    <div className={styles.left} style={{hight:120, marginBottom:50}}>

    
    
    {showSignupForm && <Signup toggleSignupForm={toggleSignupForm} />}
    </div>
</div>


  <div style={{hight:20}}>
  <Footer />
  </div>
  


    </>
  );
}

export default Login;
