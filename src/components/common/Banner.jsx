import React from 'react'
import styles from '../../styles/outerPages/login.module.css'

import banner from '/assets/about/banner_main.jpeg'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={banner} alt="lazycrazy logo" className={styles.banner_img} />
    </div>
  )
}
export default Banner