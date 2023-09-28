// Popup.js
import React from 'react';
import '../assets/css/popup.css'
import { useEffect } from 'react';


const Popup = ({ onClose, title, content }) => {
    const handleEscapeKeyPress = (e) => {
        if (e.key === 'Escape') {
          onClose(); // Close the popup when "Escape" key is pressed
        }
      };
    
      // Add an event listener when the component mounts
      useEffect(() => {
        document.addEventListener('keyup', handleEscapeKeyPress);
    
        // Remove the event listener when the component unmounts
        return () => {
          document.removeEventListener('keyup', handleEscapeKeyPress);
        };
      }, []);
  return (
    <>
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
    
    </>
  );
};

export default Popup;