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
                    <div className={styles.dropdown}>
                        <a href="/about" className={styles.nav_link}>Who we are</a>
                        {/* <div className={styles.dropdownContent}>
                            <a href="#">Service 1</a>
                            <a href="#">Service 2</a>
                            <a href="#">Service 3</a>
                        </div> */}
                    </div>
                    <div className={styles.dropdown}>
                        <a href="#" className={styles.nav_link}>Our Services</a>
                        <div className={styles.dropdownContent}>
                            <a href="/business-profile">Business</a>
                            <a href="/hiring">Hiring</a>
                            <a href="/software-technology">Software Technology</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <a href="/hiring" className={styles.nav_link}>Hiring</a>
                        {/* <div className={styles.dropdownContent}>
                            <a href="#">Service 1</a>
                            <a href="#">Service 2</a>
                            <a href="#">Service 3</a>
                        </div> */}
                    </div>
                    <div className={styles.dropdown}>
                        <a href="/investors" className={styles.nav_link}>Investor</a>
                            {/* <div className={styles.dropdownContent}>
                                <a href="#">Service 1</a>
                                <a href="#">Service 2</a>
                                <a href="#">Service 3</a>
                            </div> */}
                    </div>
                </div>
                <div className={styles.help_box}>
                    <a href='#' className={styles.nav_link}>Help & Support</a>
                </div>
            </div>
        </div>
    );
}

export default LzyCrazyHeader;
