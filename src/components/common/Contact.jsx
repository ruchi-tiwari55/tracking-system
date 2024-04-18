import React from 'react'
import styles from '../../styles/contact.module.css'

const Contact = ({ toggleContactForm }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.top}>
                    <h4>Contact Us</h4>
                    <span className={styles.close} onClick={toggleContactForm}>&times;</span>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    alert('Thanks for contacting us!')
                }}>
                    <div className={styles.form}>
                        <input type='text' placeholder='Name' required />
                        <input type='text' placeholder='Business Profile' required />
                        <input type='text' placeholder='Mobile number or email address' required />
                        <textarea placeholder="Type your message here.." required />
                    </div>
                    <div className={styles.bottom}>
                        <p>People who use our service may have uploaded your contact information to<br /> Lzycrazy.</p>
                    </div>
                    <button className={styles.cbtn} type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact