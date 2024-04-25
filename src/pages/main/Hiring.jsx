import styles from '../../styles/outerPages/hiring.module.css'
import LzyCrazyHeader from '../../components/common/LzyCrazyHeader'
import LzyCrazyFooter from '../../components/common/LzyCrazyFooter'
import ImageSlider from '../../components/common/Img_slider'
import HiringForm from '../../components/common/HiringForm';
import { useState } from 'react';

function Hiring() {
    const [showHiringForm, setShowHiringForm] = useState(false);

    const toggleHiringForm = () => {
        setShowHiringForm(!showHiringForm);
    };

    return (
        <div>
            <LzyCrazyHeader />

            <ImageSlider />
            <section className={styles.hiring_icons}>
                {showHiringForm && <HiringForm toggleHiringForm={toggleHiringForm} />}
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i1.png" alt="" />
                    </div>
                    <p>Advertising</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i2.png" alt="" />
                    </div>
                    <p>Application</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i3.png" alt="" />
                    </div>
                    <p>Bike Saler</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i4.png" alt="" />
                    </div>
                    <p>Billing Manager</p>
                </div>

                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i5.png" alt="" />
                    </div>
                    <p>Brand Manager</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i6.png" alt="" />
                    </div>
                    <p>Builder</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i7.png" alt="" />
                    </div>
                    <p>Business Analyst</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i8.png" alt="" />
                    </div>
                    <p>Business Manager</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i11.png" alt="" />
                    </div>
                    <p>Content Writer</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i12.png" alt="" />
                    </div>
                    <p>Cricket Coach</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i13.png" alt="" />
                    </div>
                    <p>CTO</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i14.png" alt="" />
                    </div>
                    <p>Custom Manager</p>
                </div>

                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i17.png" alt="" />
                    </div>
                    <p>Django Engineer </p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i18.png" alt="" />
                    </div>
                    <p>E-Commerce</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i19.png" alt="" />
                    </div>
                    <p>Ethical Hacker</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i20.png" alt="" />
                    </div>
                    <p>Event Manager</p>
                </div>

                {/* <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i9.png" alt="" />
                    </div>
                    <p>Car Sale Manager</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i10.png" alt="" />
                    </div>
                    <p>City Manager</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i15.png" alt="" />
                    </div>
                    <p>Cycle Sale</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i16.png" alt="" />
                    </div>
                    <p>Delivery Manager</p>
                </div>

                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i21.png" alt="" />
                    </div>
                    <p>Fashion Designer</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i22.png" alt="" />
                    </div>
                    <p>Field Manager</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i23.png" alt="" />
                    </div>
                    <p>Finance Manager</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i24.png" alt="" />
                    </div>
                    <p>Football Coach</p>
                </div>

                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i31.png" alt="" />
                    </div>
                    <p>Marketing Manager</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i32.png" alt="" />
                    </div>
                    <p>Network Engineer</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i33.png" alt="" />
                    </div>
                    <p>Networking</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i34.png" alt="" />
                    </div>
                    <p>Payment Getaway</p>
                </div>

                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i37.png" alt="" />
                    </div>
                    <p>React Native</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i38.png" alt="" />
                    </div>
                    <p>Sales Manager</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i39.png" alt="" />
                    </div>
                    <p>Scan Technology</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i40.png" alt="" />
                    </div>
                    <p>Server Manager</p>
                </div>

                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i25.png" alt="" />
                    </div>
                    <p>Graphic Designer</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i26.png" alt="" />
                    </div>
                    <p>Hardware Engineer</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i27.png" alt="" />
                    </div>
                    <p>HR Manager</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i28.png" alt="" />
                    </div>
                    <p>IT Developer</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i29.png" alt="" />
                    </div>
                    <p>Laser Technology</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i30.png" alt="" />
                    </div>
                    <p>Listing Manager</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i35.png" alt="" />
                    </div>
                    <p>Project Manager</p>
                </div>
                <div className={styles.box_content} onClick={toggleHiringForm}>
                    <div className={styles.box_images}>
                        <img src="/assets/Hiring/i36.png" alt="" />
                    </div>
                    <p>React JS</p>
                </div> */}
            </section>
            <LzyCrazyFooter />
        </div>
    )
}
export default Hiring