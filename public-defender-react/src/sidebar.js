import React, { useState, useEffect } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faCalendarDays, faClock, faEye, faThumbtack, faFileInvoice, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <div className="sidebar">
      <p className="sidebar-headings">Quick Tools</p>
      <Link to="/" className={activeTab === '/' ? 'active' : ''} onClick={() => handleTabClick('/')}>
        <FontAwesomeIcon icon={faHouseChimney} className="side-bar-icon" />
        <p className="side-bar-item">Home</p>
      </Link>
      <Link to="/my-shifts" className={activeTab === '/my-shifts' ? 'active' : ''} onClick={() => handleTabClick('/my-shifts')}>
        <FontAwesomeIcon icon={faCalendarDays} className="side-bar-icon" />
        <p className="side-bar-item">My Shifts</p>
      </Link>
      <Link to="/shift-booking" className={activeTab === '/shift-booking' ? 'active' : ''} onClick={() => handleTabClick('/shift-booking')}>
        <FontAwesomeIcon icon={faClock} className="side-bar-icon" />
        <p className="side-bar-item">Shift Booking</p>
      </Link>
      <Link to="/view-all-shifts" className={activeTab === '/view-all-shifts' ? 'active' : ''} onClick={() => handleTabClick('/view-all-shifts')}>
        <FontAwesomeIcon icon={faEye} className="side-bar-icon" />
        <p className="side-bar-item">View All Shifts</p>
      </Link>
      <Link to="/shift-check-in" className={activeTab === '/shift-check-in' ? 'active' : ''} onClick={() => handleTabClick('/shift-check-in')}>
        <FontAwesomeIcon icon={faThumbtack} className="side-bar-icon" />
        <p className="side-bar-item">Shift Check-In</p>
      </Link>
      <p className="sidebar-headings">Personal</p>
      <Link to="/duty-reporting-form" className={activeTab === '/duty-reporting-form' ? 'active' : ''} onClick={() => handleTabClick('/duty-reporting-form')}>
        <FontAwesomeIcon icon={faFileInvoice} className="side-bar-icon" />
        <p className="side-bar-item">Duty Reporting Form</p>
      </Link>
      <Link to="/create-shifts" className={activeTab === '/create-shifts' ? 'active' : ''} onClick={() => handleTabClick('/create-shifts')}>
        <FontAwesomeIcon icon={faUserTie} className="side-bar-icon" />
        <p className="side-bar-item">Account Settings</p>
      </Link>
    </div>
  );
};

export default Sidebar;
