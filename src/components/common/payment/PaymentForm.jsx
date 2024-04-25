import React, { useState } from 'react';
import styles from './paymentForm.module.css';

const PaymentPage = ({ userDetails }) => {
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle payment submission
    console.log('Payment submitted:', { paymentMethod, cardNumber, expiryDate, cvv, userDetails });
  };

  return (
    <div className={styles.paymentContainer}>
      <h2 className={styles.heading}>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Payment Method:</label>
          <select className={styles.select} value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        {paymentMethod === 'credit_card' && (
          <>
            <div className={styles.formGroup}>
              <label className={styles.label}>Card Number:</label>
              <input className={styles.input} type="text" value={cardNumber} onChange={handleCardNumberChange} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Expiry Date:</label>
              <input className={styles.input} type="text" value={expiryDate} onChange={handleExpiryDateChange} placeholder="MM/YYYY" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>CVV:</label>
              <input className={styles.input} type="text" value={cvv} onChange={handleCVVChange} />
            </div>
          </>
        )}
        <button className={styles.button} type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;
