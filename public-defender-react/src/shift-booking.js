
import React from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar';
import Sidebar from './sidebar';


export default function ShiftBooking() {
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
              <tr>
                <td>Item 1</td>
                <td>Item 1</td>
                <td>Item 1</td>
                <td>Item 1</td>
                <td><button className="make-booking">Book Shift</button></td>
              </tr>
              <tr>
                <td>Item 2</td>
                <td>Item 2</td>
                <td>Item 2</td>
                <td>Item 2</td>
                <td><button className="make-booking">Book Shift</button></td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td>Item 3</td>
                <td>Item 3</td>
                <td>Item 3</td>
                <td><button className="make-booking">Book Shift</button></td>
              </tr>
              <tr>
                <td>Item 4</td>
                <td>Item 4</td>
                <td>Item 4</td>
                <td>Item 4</td>
                <td><button className="make-booking">Book Shift</button></td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
        </div>
      </div>
</div>
    
  );
}
