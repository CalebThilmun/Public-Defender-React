// SomePage.js
import React from 'react';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function MyShifts() {

  const [bookedShifts, setBookedShifts] = useState([]);

  useEffect(() => {
    const loadedBookings = JSON.parse(localStorage.getItem('bookings'));
    if (loadedBookings) {
      setBookedShifts(loadedBookings);
    }
  }, []);

  return (
       
<div>
<Navbar />
<Sidebar />
      <div>
      <h2 className="page-heading">Active Shifts</h2>
      <br></br>

      <div className="search-container">
        <input type="text" placeholder="Search Shifts..." name="search" />
        <button type="submit" className="search-filter"><FontAwesomeIcon icon={faSearch} /></button>
      </div>

      <div className="filter-container">
        <select>
          <option value="">Filter..</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <button type="submit" className="search-filter"><FontAwesomeIcon icon={faFilter} /></button>
      </div>

      <div className="my-shifts-table">
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Type</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {bookedShifts.map((shift, index) => (
                <tr key={index}>
                  <td>{shift.title}</td>
                  <td>{shift.type}</td>
                  <td>{shift.date}</td>
                  <td><button className="edit-button">Edit</button></td>
                </tr>
              ))}
            </tbody>
        </table>
        <br></br>
        <br></br>
        <Link to="/shift-booking" className="new-booking-button">+ New Booking</Link>
      </div>
    </div>
    </div>
    
  );
}
