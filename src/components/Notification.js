import React, { useEffect, useState } from 'react';
import './Notification.css';
import { FaTimes, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa'; // Import additional icons

const Notification = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      // Only set a timer to close if it's not a 'sending' state
      if (type !== 'sending') {
        const timer = setTimeout(() => {
          setVisible(false);
          onClose();
        }, 5000); // Notification will disappear after 5 seconds for success/error
        return () => clearTimeout(timer);
      }
    }
  }, [message, type, onClose]);

  if (!visible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="icon success-icon" />;
      case 'error':
        return <FaExclamationCircle className="icon error-icon" />;
      case 'sending':
        return <FaSpinner className="icon spinner-icon" />; // Loading spinner
      default:
        return null;
    }
  };

  return (
    <div className={`notification-container ${type}`}>
      {getIcon()}
      <div className="notification-content">
        <p>{message}</p>
        {type !== 'sending' && ( // Don't show close button during 'sending'
          <button onClick={() => setVisible(false)} className="close-btn">
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
};

export default Notification;