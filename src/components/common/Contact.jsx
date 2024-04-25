import React, { useState } from 'react';
import styles from './contact.module.css';

const Contact = ({ toggleContactForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessprofile: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('https://lzycrazy-backend.onrender.com/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Thanks for contacting us!');
        toggleContactForm(); // Close the form after successful submission
      } else {
        alert('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.top}>
          <h4>Contact Us</h4>
          <span className={styles.close} onClick={toggleContactForm}>&times;</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='businessprofile'
              placeholder='Business Profile'
              value={formData.businessprofile}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='phone'
              placeholder='Phone Number'
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              placeholder='Type your message here..'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.bottom}>
            <p>People who use our service may have uploaded your contact information to<br /> Lzycrazy.</p>
          </div>
          <button className={styles.cbtn} type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;