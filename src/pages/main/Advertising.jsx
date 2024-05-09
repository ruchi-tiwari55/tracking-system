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
                            <div className={styles.content_a} style={{marginTop:100}}>
                                <h4>Welcome to All Business Ad</h4>

                                <p style={{fontSize:16, lineHeight:1.5}}> LzyCrazy team will create business ad<br />Your business ad will Stream live in the LzyCrazy Marketplace
                                </p>
                                 <h4>Benefit</h4>
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