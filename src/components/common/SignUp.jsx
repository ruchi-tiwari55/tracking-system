import React, { useState } from "react";
import styles from "./signup.module.css";
import "../../styles/globals.css";

function Signup({ toggleSignupForm }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    country: "India",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    // Send formData to the API
    try {
      const response = await fetch("http://213.210.36.143:8000/v1/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      toggleSignupForm();
      // alert('Register successful');
      // Handle response
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
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
            <h4>Signup</h4>
            <p style={{ fontSize: 12 }}>It's quick and easy.</p>
          </div>
          <span className={styles.close} onClick={toggleSignupForm}>
            &times;
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.form_name}>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={{ height: 35, }}
              />
              <input
                type="text"
                name="lastName"
                placeholder="last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                style={{ height: 35 }}

              />
            </div>
            <div style={{display:'flex', gap:20, width:'90%'}}>

           
            <input
              type="text"
              name="email"
              placeholder="email address"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ height: 35 }}

            />
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              style={{ height: 35 }}

            />
             </div>
            <input
              type="password"
              name="password"
              placeholder="New password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ height: 35 }}

            />
          </div>
          <div className={styles.dob}>
            <p style={{ fontSize: 12 }}>Date of birth</p>
            <div className={styles.dob_select}>
              <select name="day" value={formData.day} onChange={handleChange}>
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
              >
                <option value="">Month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select name="year" value={formData.year} onChange={handleChange}>
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.gender_p}>
            <p style={{ fontSize: 10 , marginTop:10 }}>Gender</p>
            <div className={styles.gender} style={{ height: 40 }}>
              <label>
                Male
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
              </label>
              <label>
                Female
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
              </label>
              <label>
                Other
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className={styles.location}>
            <p style={{ fontSize: 10, marginTop:20 }}>Country</p>
            <div>
              <div className={styles.country} style={{ height: 40 }}>
                <div>
                  <img src="assets/about/india.png" alt="flag" width={30} />
                  India
                </div>
              </div>
              <div className={styles.state} style={{ height: 40, }}>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="" style={{ fontSize: 10 }}>State</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">
                    Dadra and Nagar Haveli
                  </option>
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
              <div className={styles.city} style={{ height: 40 }}>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>

            <p style={{ fontSize: 10, paddingLeft:20, paddingRight:20}}>
              {/* By clicking Sign Up, you agree to our <span>Terms</span>,
              <span> Privacy Policy</span> and <br />
              <span>Cookies Policy</span>. You may receive SMS notifications
              from us
              <br />
              and can opt out at any time. */}
              By Continuing, You Agree to Lzy Crazy <span>Term & Conditions</span> and Confirm that You have Read Lzy Crazy <span>Privacy Policy </span>.
            </p>
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
