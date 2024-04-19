import React from 'react'
import styles from '../../styles/outerPages/privacyPolicy.module.css'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
    return (
        <div>
            <section className={styles.about_us}>
                <div className={styles.about}>
                    <div className={styles.text} style={{ marginTop: "20px" }}>
                        <h3 style={{ fontWeight: "600" }}>Privacy Policy</h3>
                        <div>
                            <h1 className={styles.head_title}>
                                Please read this Privacy Policy of LZYCRAZY Carefully
                            </h1>
                            <p className={styles.head_title_desc}>
                                This Privacy Policy describes the practices by the “LZYCRAZY” application.
                                It explains the storage, disclosure, use, other processing of your data
                                (Personal &amp; Non-Personal, and usage and sharing of contents). Hence,
                                before start using this application or giving information about you,
                                kindly review this Privacy Policy.
                            </p>
                            <p className={styles.policy_item_title}>
                                Information we collect through In-App Disclosure
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>A. Storage:</span> If
                                allowed, we enable you to upload files from your device such as your
                                Resume, Profile Picture, any document for verification of your profile,
                                etc.
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>B. Location:</span> If
                                allowed, we help to find Jobs/Ads near your location.
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>C. Contacts:</span> If
                                allowed, we enable you to invite your friends through SMS, and WhatsApp.
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>D. Camera:</span> If
                                allowed, we enable you to shoot a picture or video.
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>E. Microphone:</span>
                                If allowed, we enable you to record an audio.
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>F. Telephone:</span>
                                If allowed, we read the Phone Status and identity.
                            </p>
                            <p className={styles.policy_item_title}>
                                Other Information we collect during your usage of LZYCRAZY App:
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>A. </span>When you
                                create your profile, we ask for your personal data like phone number,
                                email ID, state, city, area, address, etc in order to make your profile
                                uniquely identifiable.
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>B. </span>The
                                serviceman is required to verify their name, mobile no, email address,
                                state, city, area, address, and photo.
                            </p>
                            <p className={styles.policy_item_title}>
                                Third Party Tools, SDKs, Services used
                            </p>

                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>
                                    Payment Gateway:</span>
                                It enables you make payments through various payment modes like UPI,
                                Credit Card, Debit Card, Internet Banking, etc.
                            </p>
                            <p className={styles.policy_item_title}>
                                The Use of the Information Collected
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>A. </span>To provide
                                the best-personalized services to you.
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>B. </span>To
                                facilitate you to provide all the information required in the
                                recruitment/job search.
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>C. </span>Helps in
                                research and statistical analysis of users to make business decisions.
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>D. </span>To improve
                                and develop our Platform and conduct product development.
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}>E. </span>To help us
                                detect abuse, fraud, and illegal activity on the Platform and communicate
                                to you.
                            </p>
                            <p className={styles.policy_item_title}>
                                How your information may be disclosed
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}
                                >A.Personal Information:
                                </span>
                                In general, we use the data internally to serve our Users and enable them
                                to take maximum advantage of the Application. We do not disclose your
                                Personal Information to any third party.
                            </p>
                            <p className={styles.policy_item_desc}>
                                <span className={styles.policy_item_descA}
                                >B.Non-Personal Information:
                                </span>
                                In general, we use the data internally to serve our Users and enable them
                                to take maximum advantage of the Application. We do not disclose your
                                Personal Information to any third party.
                            </p>
                            <p className={styles.policy_item_title}>M. Jurisdiction:</p>
                            <p className={styles.policy_item_desc}>
                                If you choose to visit the Apps/Services, your visit and any dispute over
                                privacy are subject to this Privacy Policy and the Apps/Services' terms of
                                use. Any disputes arising under this Privacy Policy shall be strictly
                                governed by the laws of India.
                            </p>
                            <p className={styles.policy_item_title}>Contact Us:</p>
                            <p className={styles.policy_item_desc}>
                                If you have any concerns regarding this privacy policy, please email us at <span><a href="mailto:support@LZYCRAZY.in" style={{ color: "rgb(39, 2, 141)" }}>support@lzycrazy.com</a></span>
                            </p>
                        </div>
                        <div className={styles.data}>
                            <Link to="/"><button className={styles.btn}>Lets Connect</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicy