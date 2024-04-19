import React from 'react'
import styles from './lzyCrazyFooter.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

function LzyCrazyFooter() {
    return (
        <footer className={styles.main}>
            <div>
                <div className={styles.footer} style={{ marginTop: "3rem" }}>
                    <div className={styles.content}>
                        <div className={styles.services} style={{ marginTop: "2rem" }}>
                            <p ><a href="#" className={styles.bold}>Company Info</a></p>
                            <p><a href="#">About</a></p>
                            <p><a href="#">Investor</a></p>
                            <p><a href="#">Hiring</a></p>

                        </div>
                        <div className={styles.details} style={{ marginTop: "2rem" }}>
                            <p><a className={styles.bold}>Our Services</a></p>
                            <p><a href="#">Advertising</a></p>
                            <p><a href="#">Business</a></p>
                            <p><a href="#">Software Technology</a></p>
                        </div>
                        <div className={styles.details} style={{ marginTop: "2rem" }}>
                            <p><a className={styles.bold}>Terms and Conditions</a></p>
                            <p><a href="#">Privacy Policy</a></p>
                            <p><a href="#">Terms</a></p>
                            <p><a href="#">Help Center</a></p>
                        </div>
                        <div className={styles.links} style={{ marginTop: "2rem" }}>
                            <p><a className={styles.bold}>Contact Us</a></p>
                            <p><a href="#">help&Support@lzycrazy.com</a></p>
                            <p><a href="#">complaint@lzycrazy.com</a></p>
                            <p><a href='#'>Sector-29 Noida U.P-201303</a></p>
                        </div>

                        <div className={styles.links} style={{ marginTop: "2rem" }}>
                            <div
                                className={styles.social_media}
                                style={{
                                    marginTop: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    fontSize: "20px"
                                }} >
                                <div style={{ display: "flex", flexDirection: "column", cursor: 'pointer' }}>
                                    <img
                                        src="assets/about/favicon.png"
                                        alt="favicon"
                                        style={{ width: "3rem", marginBottom: "2rem", objectFit: "contain" }}
                                    />
                                    <p style={{ marginTop: '-30px', fontSize: '10px' }}>LzyCrazy</p>
                                </div>

                                <p>
                                    <a href="#"
                                    ><LinkedInIcon /></a>
                                </p>
                                <p>
                                    <a href="#"><XIcon /></a>
                                </p>
                                <p>
                                    <a href="https://github.com/farazc60"
                                    ><GitHubIcon /></a>
                                </p>
                                <p>
                                    <a href="https://www.facebook.com/codewithfaraz"
                                    ><FacebookIcon /></a>
                                </p>
                                <p>
                                    <a href="https://www.instagram.com/codewithfaraz"
                                    ><InstagramIcon /></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <footer style={{ marginBottom: "1rem" }}>
                        <hr />
                        Copyright 2023-24 © Lzycrazy .
                    </footer>
                </div>
            </div>
        </footer>
    )
}

export default LzyCrazyFooter