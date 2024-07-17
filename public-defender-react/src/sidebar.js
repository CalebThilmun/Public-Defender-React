import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faCalendarDays, faClock, faEye, faThumbtack, faFileInvoice, faUserTie, faThumbTack } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="sidebar-headings">Quick Tools</p>
      <Link to="/home-dashboard"><FontAwesomeIcon icon={faHouseChimney} className="side-bar-icon" /><p className="side-bar-item">Home</p></Link>
      <Link to="/my-shifts">< FontAwesomeIcon icon={faCalendarDays} className="side-bar-icon" /><p className="side-bar-item">My Shifts</p></Link>
      <Link to="/">< FontAwesomeIcon icon={faClock} className="side-bar-icon"/><p className="side-bar-item">Shift Booking</p></Link>
      <Link to="/">< FontAwesomeIcon icon={faEye} className="side-bar-icon"/><p className="side-bar-item">View All Shifts</p></Link>
      <Link to="/"><  FontAwesomeIcon icon={faThumbtack} className="side-bar-icon"/><p className="side-bar-item">Shift Check-In</p></Link>
      <p className="sidebar-headings">Personal</p>
      <Link to="/">< FontAwesomeIcon icon={faFileInvoice} className="side-bar-icon"/><p className="side-bar-item">Duty Reporting Form</p></Link>
      <Link to="/">< FontAwesomeIcon icon={faUserTie} className="side-bar-icon"/><p className="side-bar-item">Account Settings</p></Link>
    </div>
  );
};

export default Sidebar;