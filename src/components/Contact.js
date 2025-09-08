import React, { useState } from 'react';
import './Contact.css';
import Notification from './Notification'; // Import the new component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Updated state to handle both message and type
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotification({ message: 'Sending...', type: 'sending' });

    try {
      const response = await fetch('https://my-portfolio-backend-zu90.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({ message: 'Message sent successfully!', type: 'success' });
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setNotification({ message: 'Failed to send message. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setNotification({ message: 'An error occurred. Please try again.', type: 'error' });
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* ... Your form inputs (name, email, message) ... */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      {/* Conditionally render the Notification component */}
      {notification.message && (
        <Notification 
          message={notification.message}
          type={notification.type} 
          onClose={() => setNotification({ message: '', type: '' })}
        />
      )}
    </section>
  );
};

export default Contact;
