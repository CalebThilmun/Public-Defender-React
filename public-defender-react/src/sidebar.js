import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faCalendarDays, faClock, faEye, faThumbtack, faFileInvoice, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import ShiftCreation from './create-shifts';
import HomeDashboard from './home-dashboard';
import MyShifts from './my-shifts';
import ShiftBooking from './shift-booking';
import ShiftCheckIn from './shift-check-in';
import ViewAllShifts from './view-all-shifts';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';



const Sidebar = () => {
  return (
<Router>
<div className="sidebar">
      <p className="sidebar-headings">Quick Tools</p>
      <Link to="/"><FontAwesomeIcon icon={faHouseChimney} className="side-bar-icon" /><p className="side-bar-item">Home</p></Link>
      <Link to="/">< FontAwesomeIcon icon={faCalendarDays} className="side-bar-icon" /><p className="side-bar-item">My Shifts</p></Link>
      <Link to="/">< FontAwesomeIcon icon={faClock} className="side-bar-icon"/><p className="side-bar-item">Shift Booking</p></Link>
      <Link to="/">< FontAwesomeIcon icon={faEye} className="side-bar-icon"/><p className="side-bar-item">View All Shifts</p></Link>
      <Link to="/"><  FontAwesomeIcon icon={faThumbtack} className="side-bar-icon"/><p className="side-bar-item">Shift Check-In</p></Link>
      <p className="sidebar-headings">Personal</p>
      <Link to="/">< FontAwesomeIcon icon={faFileInvoice} className="side-bar-icon"/><p className="side-bar-item">Duty Reporting Form</p></Link>
      <Link to="/">< FontAwesomeIcon icon={faUserTie} className="side-bar-icon"/><p className="side-bar-item">Account Settings</p></Link>
      </div>
    
    <Routes>
    <Route path="/home-dashboard" element={<HomeDashboard />} />
    <Route path="/create-shifts" element={<ShiftCreation />} />
    <Route path="/my-shifts" element={<MyShifts />} />
    <Route path="/shift-booking" element={<ShiftBooking />} />
    <Route path="/shift-check-in" element={<ShiftCheckIn />} />
    <Route path="/view-all-shifts" element={<ViewAllShifts />} />
    </Routes>
</Router>
      
  );
};

export default Sidebar;