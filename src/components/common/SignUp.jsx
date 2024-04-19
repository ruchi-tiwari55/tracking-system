import styles from './signup.module.css'
import '../../styles/globals.css'
import { useState } from 'react';

function Signup({ toggleSignupForm }) {

    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
    };
    const years = [];
    for (let year = 1920; year <= 2024; year++) {
        years.push(year);
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.top}>
                    <div>
                        <h2>Signup</h2>
                        <p>It's quick and easy.</p>
                    </div>
                    <span className={styles.close} onClick={toggleSignupForm}>&times;</span>
                </div>
                <form>
                    <div className={styles.form}>
                        <div className={styles.form_name}>
                            <input type="text" placeholder="Firstname" required />
                            <input type="text" placeholder="Surname" required />
                        </div>
                        <input type='text' placeholder='Mobile number or email address' required />
                        <input type="password" placeholder="New password" required />
                    </div>
                    <div className={styles.dob}>
                        <p>Date of birth</p>
                        <div className={styles.dob_select}>
                            <select>
                                <option value="">Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select>
                                <option value="">Month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                            <select>
                                <option value="">Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={styles.gender_p}>
                        <p>Gender</p>
                        <div className={styles.gender}>
                            <label>
                                Male
                                <input type="radio" name='gender' onChange={() => handleGenderChange('male')} />
                            </label>
                            <label>
                                Female
                                <input type="radio" name='gender' onChange={() => handleGenderChange('female')} />
                            </label>
                            <label>
                                Other
                                <input type="radio" name='gender' onChange={() => handleGenderChange('other')} />
                            </label>
                        </div>
                    </div>
                    <div className={styles.location}>
                        <p>Country</p>
                        <div>
                            <div className={styles.country}>
                                <div>
                                    <img src='assets/about/india.png' alt='flag' width={35} />
                                    India
                                </div>
                            </div>
                            <div className={styles.state}>
                                <select>
                                    <option value="">State</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Orissa">Orissa</option>
                                    <option value="Pondicherry">Pondicherry</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </div>
                            <div className={styles.city}>
                                <input type='text' placeholder='City' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <p>People who use our service may have uploaded your contact<br /> informationto Lzycrazy.<span> Learn more.</span></p>
                        <p>By clicking Sign Up, you agree to our <span>Terms</span>,<span> Privacy Policy</span> and <br /><span>Cookies Policy</span>.
                            You may receive SMS notifications from us<br />and can optout at any time.</p>
                        <button type="submit">Signup</button>
                    </div>
                </form>

            </div>
        </div>

    )
}
export default Signup