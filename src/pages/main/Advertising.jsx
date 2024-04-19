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
                            <div className={styles.content}>
                                {/* <h1>Business Profile</h1> */}
                                <h3>Welcoming all Business Profile</h3>

                                <p> In LzyCrazy Market Place<br />

                                    Team will create your Business Profile<br />

                                    Your Business ad will Stream live in the<br />
                                    LzyCrazy Marketplace<br />
                                </p>

                                <h5> Our all users view your Business Profile</h5>

                                <p>Customer with interest of your Business will<br />
                                    Directly Connect you
                                </p>
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