import React from 'react'
import styles from '../../styles/forget.module.css'

const Forget = ({ toggleForgetForm }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.top}>
                    <h4>Reset Password</h4>
                    <span className={styles.close} onClick={toggleForgetForm}>&times;</span>

                </div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    alert('Password changed Successfully!')
                }}>
                    <div className={styles.form}>
                        <input type='text' placeholder='Enter your email address' required />
                    </div>
                    <div className={styles.bottom}>
                        <p>Please enter your email address to reset your password.</p>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Forget