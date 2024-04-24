import React from 'react';
import styles from './confirmForm.module.css';

const ConfirmationForm = ({ formData, handleConfirm, handleEdit }) => {
    return (
        <div className={styles.confirmationForm}>
            <h4>Confirm Your Details</h4>
            <p>Review the details you entered:</p>
            <div className={styles.details}>
                <p><strong>Job:</strong> {formData.job}</p>
                <p><strong>Experience:</strong> {formData.experience}</p>
                <p><strong>Certifications:</strong> {formData.certifications}</p>
                <p><strong>Your account ID:</strong> {formData.accountId}</p>
                <div>
                    <strong>Recorded video:</strong>
                    <div className={styles.video_window}>
                        {formData.videoURL ? (
                            <video src={formData.videoURL} controls autoPlay className={styles.video_player} />
                        ) : (
                            <video ref={videoRef} className={styles.video_player} />
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button onClick={handleConfirm}>Confirm</button>
                <button onClick={handleEdit}>Edit Details</button>
            </div>
        </div>
    );
}

export default ConfirmationForm;
