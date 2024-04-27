import React, { useState } from 'react';
import styles from '../../styles/home/profile.module.css'

const Profile = () => {

    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText("https://lzycrazy.com/register/1904");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <div className={styles.outer}>
            <div className={styles.top}>
                <img src="https://lzycrazy.com/assets/about-bg.d32aac61.jpg" alt="Profile Background" />
                {/* <div className={styles.modal}>
                    <p>
                        Arvind Bhandari
                        <span>arvindbhandari@gmail.com</span>
                    </p>
                </div> */}
            </div>
            <div className={styles.link}>
                <h5>
                    <i className="fa fa-copy" onClick={handleCopyClick}>
                    </i>
                    REFERAL LINK :{" "}
                    <span>
                        https://lzycrazy.com/register/1904
                    </span>
                </h5>

            </div>
            <div className={styles.link}>
                <div>
                    <h5>Referal Count : <span>13</span></h5>
                </div>
                <div>
                    <h5>Pending Referals : <span>76</span></h5>
                </div>
            </div>
        </div>
    );
};

export default Profile;
