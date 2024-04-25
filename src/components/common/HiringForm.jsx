import React, { useState } from 'react';
import TaskForm from './TaskForm';
import VideoRecorder from './VideoRecorder';
import ConfirmForm from './ConfirmForm';
import PaymentForm from './payment/PaymentForm'; 
import styles from './hiringForm.module.css';
import '../../styles/globals.css';

function HiringForm({ toggleHiringForm }) {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        job: '',
        experience: '',
        certifications: '',
        accountId: '',
        videoURL: ''
    });

    const { job, experience, certifications, accountId } = formData;
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleHiringFormSubmit = (e) => {
        e.preventDefault();
        setStep(1);
    };

    const handleTaskFormSubmit = () => {
        // Handle task form submission
        setStep(0);
    };

    const handleConfirm = () => {
        setStep(2); 
    };

    const handleEdit = () => {
        setStep(0); 
    };
    const handleVideoRecordingComplete = (videoURL) => {
        setFormData({ ...formData, videoURL: videoURL });
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                {step === 0 ? (
                    <div>
                        <div className={styles.top}>
                            <div>
                                <h4>Enter Your Details</h4>
                                <p>It's quick and easy.</p>
                            </div>
                            <span className={styles.close} onClick={toggleHiringForm}>&times;</span>
                        </div>
                        <form onSubmit={handleHiringFormSubmit}>
                            <div className={styles.dob}>
                                <div className={styles.dob_select}>
                                    <p>Job</p>
                                    <select name="job" value={job} onChange={handleInputChange}>
                                        <option value="">Select</option>
                                        <option value="IT">IT</option>
                                        <option value="Administration">Administration</option>
                                        <option value="HR">HR</option>
                                    </select>
                                </div>
                                <div className={styles.dob_select}>
                                    <p>Experience</p>
                                    <select name="experience" value={experience} onChange={handleInputChange}>
                                        <option value="">Select</option>
                                        <option value="Fresher">Fresher</option>
                                        <option value="Exp.(0-1)">Exp.(0-1)</option>
                                        <option value="Exp.(1-3)">Exp.(1-3)</option>
                                        <option value="Exp.(3-5)">Exp.(3-5)</option>
                                        <option value="Exp.5+">Exp.5+</option>
                                    </select>
                                </div>
                                <div className={styles.dob_select}>
                                    <p>Certifications</p>
                                    <select name="certifications" value={certifications} onChange={handleInputChange}>
                                        <option value="">Select</option>
                                        <option value="Coursera">Coursera</option>
                                        <option value="Udemy">Udemy</option>
                                        <option value="Meta">Meta</option>
                                        <option value="Google">Google</option>
                                        <option value="Microsoft">Microsoft</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.form}>
                                <input name="accountId" type='text' placeholder='Enter your account ID' value={accountId} onChange={handleInputChange} required />
                                <div>
                                    <p>Don't have an account?</p>
                                    <a href="/">Create here</a>
                                </div>

                            </div>

                            <div className={styles.video}>
                                <div>
                                    <video width="300" height="200" controls>
                                        <source src="/assets/about/info_video2.MP4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div style={{ textAlign: "center" }}>How Lzycrazy works</div>
                                </div>
                                <div>
                                    <VideoRecorder onRecordingComplete={handleVideoRecordingComplete} />
                                    <div style={{ textAlign: "center" }}>Upload your work</div>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <p>By clicking Submit, you agree to our <span>Terms</span>,<span> Privacy Policy</span> and <span>Cookies Policy</span>.<br />
                                    You may receive SMS notifications from us and can optout at any time.</p>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                ) : step === 1 ? (
                    <ConfirmForm
                        formData={formData}
                        handleConfirm={handleConfirm}
                        handleEdit={handleEdit}
                    />
                    ) : (
                            <PaymentForm />
                    
                )}
            </div>
        </div>
    );
}

export default HiringForm;
{/* <TaskForm handleSubmit={handleTaskFormSubmit} toggleHiringForm={toggleHiringForm} />  */}