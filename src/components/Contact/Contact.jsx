import React from 'react';
import '../Contact/Contact.css';
import NavDown from '../navbar/NavDown';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below and we will get in touch with you shortly.</p>
      </header>

      <main className="contact-content container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </main>

      <Footer />
      <NavDown />
    </div>
  );
}

export default Contact;
