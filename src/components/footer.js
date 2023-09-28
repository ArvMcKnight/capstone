// import React from 'react';
import '../assets/css/footer.css';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser'
import React, { useState } from 'react';



const linkStyle = {
    color: '#fafafa',
    textDecoration: 'none',
  };
  
  const Footer = () => {
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();     
      
        // Replace with your actual Email.js service and template IDs
        const serviceID = 'service_pr0pjqc';
        const templateID = 'template_3wdkbwk';
        const userID = 'ZW_jl-3mJssTTiGme';
      
        const recipientEmail = email; // Get the email address entered by the user
      
        const emailData = {
          to_email: recipientEmail, // Set the recipient email address
        };
      
        emailjs
          .send(serviceID, templateID, emailData, userID) // Pass the emailData object as the third argument
          .then((response) => {
            setIsEmailSent(true);
            console.log('Email sent successfully:', response);
          })
          .catch((error) => {
            console.error('Email sending failed:', error);
          });
      };
  
    return (
      <>
        <footer className="footer">
          <div className="footer-logo">
            <Link to="/" style={linkStyle}>
              <i
                className="fa-solid fa-satellite fa-rotate-180"
                style={{ color: '#f2f2f2' }}
              ></i>{' '}
              CosmicExplorations
            </Link>
          </div>
          <ul className="footer-list">
            <h4>OFFICE</h4>
            <li>
              <i className="fas fa-house" style={{ color: '#fafafa' }}></i> 23U Baesa Road Quezon City Phil.
            </li>
            <li>
              <i className="fas fa-phone" style={{ color: '#ffffff' }}></i> 09998199293
            </li>
            <li>
              <i className="fas fa-envelope" style={{ color: '#ffffff' }}></i> arvinbacala94@gmail.com
            </li>
          </ul>
          <ul className="footer-list">
            <h4>LINKS</h4>
            <a href="/" style={linkStyle}>
              Home
            </a>
            <a href="/explorations" style={linkStyle}>
              Explorations
            </a>
            <a href="/interactives" style={linkStyle}>
              Interactive
            </a>
            <a href="/shop" style={linkStyle}>
              Shop
            </a>
          </ul>
          <div>
            <h4>SOCIALS</h4>
            <div className='socials'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </footer>
        <div className="copyright">Copyright © 2023 CosmicExplorations </div>
      </>
    );
  };
  
  export default Footer;