import React from 'react';
import styles from './lzyCrazyHeader.module.css'

function LzyCrazyHeader() {
    return (
            <div className={styles.outer}>
                <div className={styles.inner} style={{ boxShadow: "2px solid gray" }}>
                    <div className={styles.main_box}>
                        <a href="#" className={styles.logo}>
                        <img src="/assets/about/logo.e891299d.png" height="50" alt="lzycrazy Logo" loading="lazy" />
                        </a>
                    <a className={styles.nav_link} href="#">Who we are</a>
                        <a className={styles.nav_link} href="#">Our Services</a>
                        <a className={styles.nav_link} href="#">Hiring</a>
                        <a className={styles.nav_link} href="#">Investor</a>
                    </div>
                <div className={styles.help_box}>
                        <a href='#' className={styles.nav_link}>Help & Support</a>
                    </div>
                </div>
            </div>
    );
}

export default LzyCrazyHeader;
