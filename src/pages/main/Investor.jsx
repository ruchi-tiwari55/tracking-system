import React, { useState } from 'react';
import LzyCrazyHeader from '../../components/common/LzyCrazyHeader'
import LzyCrazyFooter from '../../components/common/LzyCrazyFooter'
import '../../styles/outerPages/investor.css'
import Contact from '../../components/common/Contact';

function Investor() {

    const [showContactForm, setShowContactForm] = useState(false);

    const toggleContactForm = () => {
        setShowContactForm(!showContactForm);
    };

    return (
        <div>
            <LzyCrazyHeader />
            <div className="">
                <section className="banner-section">
                    <div className="banner-img">
                        <img src='/assets/about/invester.jpg' alt='investor' />
                    </div>
                    <div className="banner-heading">
                        <div className="banner_content">
                            {/* <h1>Investor</h1> */}
                            <h3>Join all investors in LzyCrazy</h3>

                            <p>Investor plays pivotal role in every industry.<br />

                                Investors are backbone of a company.<br />

                                We are inviting potential<br />
                                investors in our organization<br />
                            </p>

                            <h5> You have more knowledge than us <br /><span>Guide us</span></h5>
                        </div>
                        <button className="btn" onClick={toggleContactForm}>Contact Us</button>
                        {showContactForm && <Contact toggleContactForm={toggleContactForm} />}
                    </div>
                </section>
            </div>
            <section className="about-section">
                <div className="about-content">
                    <div className="about-heading">
                        <p>We are inviting potential investors to our organization. You can invest and partner with LzyCrazy.</p>
                    </div>
                    <div className="about-img">
                    </div>
                </div>
            </section>
            <LzyCrazyFooter />
        </div>
    );
}

export default Investor;
