



// import React, { useState } from 'react';
// import styles from './contact.module.css';

// const Contact = ({ toggleContactForm }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     businessprofile: '',
//     phone: '',
//     email: '',
//     message: '',
//   });

//   const [successMessage, setSuccessMessage] = useState(''); // New state variable for the message

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     try {
//       const response = await fetch('https://lzycrazy-backend.onrender.com/api/contacts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setSuccessMessage('Thank you for joining us! LzyCrazy will call from this No- 9818238286'); // Update the message
//         toggleContactForm(); // Optional: Close the form after successful submission
//       } else {
//         setSuccessMessage('Failed to send your message. Please try again.'); // Error message
//       }
//     } catch (error) {
//       console.error('Error sending contact form:', error);
//       setSuccessMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className={styles.modal}>
//       <div className={styles.modal_content}>
//         <div className={styles.top}>
//           <h4>Contact Us</h4>
//           <span className={styles.close} onClick={toggleContactForm}>&times;</span>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.form}>
//             <input
//               type='text'
//               name='name'
//               placeholder='Name'
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type='text'
//               name='businessprofile'
//               placeholder='Business Profile'
//               value={formData.businessprofile}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type='text'
//               name='phone'
//               placeholder='Phone Number'
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type='text'
//               name='email'
//               placeholder='Email Address'
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name='message'
//               placeholder='Type your message here..'
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.bottom}>
//             {successMessage && (
//               <p>{successMessage}</p> // Display success or error message
//             )}
//           </div>
//           <button className={styles.cbtn} type='submit'>Send</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React, { useState } from 'react';
import styles from './contact.module.css';
import { toast } from 'react-toastify';

const Contact = ({ toggleContactForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessprofile: '',
    phone: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, businessprofile, phone, email, message } = formData;

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: name,
        bussiness_profile: businessprofile,
        email: email,
        phoneNumber: phone,
        message: message,
        isDeleted: false,
        jwtToken: 'your_jwt_token_here',
        createdBy: 'user_id_here',
        updatedBy: 'user_id_here'
      }),
    };

    try {
      const response = await fetch(
        'https://lzycrazy-tracking-backend.onrender.com/v1/contact/create',
        requestOptions
      );

      const data = await response.json();

      if (data?.message=="Contact registered successfully") {
        setSuccessMessage('Thank you for contacting us!');
        toast.success("Thank you for contacting us!");

        toggleContactForm(); 
      } else {
        setSuccessMessage('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      setSuccessMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.top}>
          <h4>Contact Us</h4>
          <span className={styles.close} onClick={toggleContactForm}>
            &times;
          </span>
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
            {successMessage && <p>{successMessage}</p>}
          </div>
          <button className={styles.cbtn} type='submit'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

