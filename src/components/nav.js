import React from 'react';
import '../assets/css/navbar.css';
import { Link } from 'react-router-dom';
import Layout from './Layout/Layout';


const Navbar = () => {
  const linkStyle = {
    color: '#fafafa',    // Set the text color to your desired color
    textDecoration: 'none' // Remove the underline
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={linkStyle}>
          <i className="fa-solid fa-satellite fa-rotate-180" style={{ color: '#f2f2f2' }}></i> CosmicExplorations
        </Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/Explorations">Exploration</Link></li>
        <li className="navbar-item"><Link to="/Interactives">Interactive</Link></li>
        <li className="navbar-item"><Link to="/shop"><i className="fa-solid fa-basket-shopping" style={{ color: "#f7f7f8" }}></i></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;