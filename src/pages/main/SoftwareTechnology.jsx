import React, { useState } from 'react'
import LzyCrazyHeader from '../../components/common/LzyCrazyHeader'
import LzyCrazyFooter from '../../components/common/LzyCrazyFooter'
import styles from '../../styles/outerPages/advertising.module.css'
import Contact from '../../components/common/Contact'

const Advertising = () => {

    const [showContactForm, setShowContactForm] = useState(false);

    const toggleContactForm = () => {
        setShowContactForm(!showContactForm);
    };

    return (
        <div>
            <LzyCrazyHeader />
            <div>
                <section id="advertising">
                    <div className={styles.ad_disp}>
                        <div className={styles.pt_6}>
                            <video autoPlay loop muted playsInline={true}>
                                <source src="/assets/about/info_video2.MP4" type="video/MP4" />
                            </video>
                        </div>
                        <div className={styles.banner_heading}>
                            <div className={styles.content_a}>
                                <h3>Software Technology</h3>
                                <p> LzyCrazy team will provide solution<br />
                                    for your business with top industry standards at<br />
                                    LzyCrazy Marketplace<br />
                                </p>
                                <h5>Benefit</h5>
                            </div>
                            <button className={styles.btn} onClick={toggleContactForm}>Contact Us</button>
                            {showContactForm && <Contact toggleContactForm={toggleContactForm} />}
                        </div>
                    </div>

                </section>
            </div>
            <LzyCrazyFooter />

        </div>

    );
}
export default Advertising