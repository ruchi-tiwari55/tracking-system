import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/outerPages/login.module.css'


const Footer = () => {
  return (
    <div className='vh-9'>
      <div className={styles.ftop}>India</div>
      <div className={styles.fdown} style={{}}>
        <div className={styles.fleft} style={{ gap: 10 }}>
         
          <Link to="/advertising"><p>Advertising</p></Link>
          <Link to="/business-profile"><p>Business</p></Link>
          <Link to="/investors"><p>Investor</p></Link>
          {/* <Link to="/hiring"><p>Team</p></Link> */}
        </div>
        <div className={styles.fright}>
            <Link to="/about"><p>About</p></Link>
            <Link to="/privacy-policy"><p>Privacy & Terms</p></Link>
            <Link to="/help-center"><p>Help & support</p></Link>
          </div>
      </div>
    </div>
  )
}

export default Footer