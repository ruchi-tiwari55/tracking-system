import React, { useState } from 'react';
import TaskForm from './TaskForm';
import VideoRecorder from './VideoRecorder';
import styles from './hiringForm.module.css';
import '../../styles/globals.css';

function HiringForm({ toggleHiringForm }) {
    const [step, setStep] = useState(0); 
    
    const handleHiringFormSubmit = (e) => {
        e.preventDefault();
        setStep(1);
    };

    const handleTaskFormSubmit = () => {
        // Handle task form submission
        setStep(0);
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
                                    <select>
                                        <option value="">Select</option>
                                        <option value="1">IT</option>
                                        <option value="2">Administration</option>
                                        <option value="3">HR</option>
                                    </select>
                                </div>
                                <div className={styles.dob_select}>
                                    <p>Experience</p>
                                    <select>
                                        <option value="">Select</option>
                                        <option value="January">Fresher</option>
                                        <option value="February">Exp.(0-1)</option>
                                        <option value="February">Exp.(1-3)</option>
                                        <option value="February">Exp.(3-5)</option>
                                        <option value="February">Exp.5+</option>
                                    </select>
                                </div>
                                <div className={styles.dob_select}>
                                    <p>New</p>
                                    <select>
                                        <option value="">Select</option>
                                        <option value="January">Fresher</option>
                                        <option value="February">Exp.(0-1)</option>
                                        <option value="February">Exp.(1-3)</option>
                                        <option value="February">Exp.(3-5)</option>
                                        <option value="February">Exp.5+</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.form}>
                                <input type='text' placeholder='Enter your ID' required />
                                <button type="">Signup</button>
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
                                    <VideoRecorder />
                                    <div style={{ textAlign: "center" }}>Upload your work</div>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <p>People who use our service may have uploaded your contact information to<br /> Lzycrazy.<span> Learn more.</span></p>
                                <p>By clicking Submit, you agree to our <span>Terms</span>,<span> Privacy Policy</span> and <span>Cookies Policy</span>.<br />
                                    You may receive SMS notifications from us and can optout at any time.</p>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                ) : 
                    (<TaskForm handleSubmit={handleTaskFormSubmit} toggleHiringForm={toggleHiringForm } />
                )}
            </div>
        </div>
    );
}

export default HiringForm;