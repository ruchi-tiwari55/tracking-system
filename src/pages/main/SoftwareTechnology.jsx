import React, { useState } from 'react'
import LzyCrazyHeader from '../../components/common/LzyCrazyHeader'
import LzyCrazyFooter from '../../components/common/LzyCrazyFooter'
import styles from '../../styles/outerPages/advertising.module.css'
import Contact from '../../components/common/Contact'
import OurServicesBanner from '../../assets/updatedBanners/ourservice.jpg'

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
                            {/* <video autoPlay loop muted playsInline={true}>
                                <source src="/assets/about/info_video2.MP4" type="video/MP4" />
                            </video> */}
                            <img src={OurServicesBanner} style={{height:400, width:800, padding:20, borderRadius:40}}/>
                        </div>
                        <div className={styles.banner_heading}>
                            <div className={styles.content_a}>
                                <h4>Software Technology</h4>
                                <p style={{fontSize:18}}> We can provide solution<br />
                                 
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