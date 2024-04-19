import React from 'react'
import styles from '../../styles/outerPages/help.module.css'
import LzyCrazyFooter from '../../components/common/LzyCrazyFooter'
import LzyCrazyHeader from '../../components/common/LzyCrazyHeader'

const Help = () => {
    return (
        <div>
            <LzyCrazyHeader />
            <div className={styles.about_us}>
                <div><h3>Support Help Center</h3></div>
                <div>
                    <div className={styles.video_head}>HOW TO USE LZYCRAZY</div>
                    <div className={styles.video_content}>
                        <div>
                            <video width="400" height="200" controls>
                                <source src="/assets/about/info_video2.MP4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className={styles.video_text}>How to use(In English)</div>
                        </div>
                        <div>
                            <video width="400" height="200" controls>
                                <source src="/assets/about/info_video2.MP4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className={styles.video_text}>How to use(In Hindi)</div>
                        </div>
                    </div>
                </div>
                <div className={styles.lower_help}>
                    <div className={styles.video_head}>CAll AND WHATSAPP US</div>
                    <div className={styles.video_content}>
                        <div style={{ fontSize: "1.3rem", lineHeight: "3rem" }}>
                            <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>Email :</span> support@lzycrazy@gmail.com<br />
                            <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>Contact :</span> +91-9818238286 <br />
                        </div>
                    </div>
                    <div className={styles.contact_icon}>
                        <img src="/assets/mainhome/icon/whatsapp.png" alt="" width="30" height="30" />
                        <img src="/assets/mainhome/icon/instagram.png" alt="" width="30" height="30" />
                        <img src="/assets/mainhome/icon/youtube.png" alt="" width="30" height="30" />
                        <img src="/assets/mainhome/icon/facebook.png" alt="" width="30" height="30" />
                    </div>
                </div>
            </div>
            <LzyCrazyFooter />
        </div>
    )
}

export default Help