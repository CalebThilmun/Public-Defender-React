import React from 'react';
import './style.css';
import logo from './assets/Public Defender Logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="nav-brand">
        <img src={logo} alt="Public Defender Logo" id="home-logo" />
      </a>
      <div className="nav-buttons">
      <div className="dropdown">
        <select className="dropbtn">
          <option value="">STATUS: Online</option>
          <option value="link1">Online</option>
          <option value="link2">Offline</option>
          <option value="link3">Away Temporarily</option>
        </select>
      </div>
      <a href="#logout" className="logout-button">Logout</a>
      </div>
      
    </div>
  );
};

export default Navbar;