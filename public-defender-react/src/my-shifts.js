// SomePage.js
import React from 'react';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar';
import Sidebar from './sidebar';


export default function MyShifts() {
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
              <th>Priority</th>
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
              <td><button className="edit-button">Edit</button></td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>Item 2</td>
              <td>Item 2</td>
              <td>Item 2</td>
              <td><button className="edit-button">Edit</button></td>
            </tr>
            <tr>
              <td>Item 3</td>
              <td>Item 3</td>
              <td>Item 3</td>
              <td>Item 3</td>
              <td><button className="edit-button">Edit</button></td>
            </tr>
          </tbody>
        </table>

        <button href="#newbooking" className="new-booking-button">+ New Booking</button>
      </div>
    </div>
    </div>
    
  );
}
