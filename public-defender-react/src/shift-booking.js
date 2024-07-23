
import React from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useEffect, useState } from 'react';


export default function ShiftBooking() {

    const [shifts, setShifts] = useState([]);

    useEffect(() => {
        const loadedShifts = JSON.parse(localStorage.getItem('shifts'));
        if (loadedShifts) {
            setShifts(loadedShifts);
        }
    }, []);


  return (
       
<div>
<Navbar />
<Sidebar />
      <div>
        <h2 className="page-heading">Available Shift Assignments</h2>
        <br />
        <div className="filter-container">
          <select>
            <option value="">Filter..</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button type="submit" className="search-filter"><FontAwesomeIcon icon={faFilter} /></button>
        </div>
        <div className="shift-booking-table">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Type</th>
                <th>Time</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                            {shifts.map((shift, index) => (
                                <tr key={index}>
                                    <td>{shift.title}</td>
                                    <td>{shift.type}</td>
                                    <td>{shift.time}</td>
                                    <td>{shift.date}</td>
                                    <td><button className="make-booking">Book Shift</button></td>
                                </tr>
                            ))}
            </tbody>
          </table>
          <br />
          <br />
        </div>
      </div>
</div>
    
  );
}
