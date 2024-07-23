// SomePage.js
import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';



export default function ShiftCheckIn() {
  return (
       
<div>
<Navbar />
<Sidebar />
      <div>
        <h2 className="page-heading">Your Assigned Shifts</h2>
        <br />
        <div className="shifts-table-container">
          <table className="assigned-shifts-table">
            <thead>
              <tr>
                <th>Details</th>
                <th>Time</th>
                <th>Duration</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Item 1</td>
                <td>Item 1</td>
                <td>Item 1</td>
                <td><button className="check-in">Check-in</button></td>
                <td><button className="cancel-shift">Cancel</button></td>
              </tr>
              <tr>
                <td>Item 2</td>
                <td>Item 2</td>
                <td>Item 2</td>
                <td><button className="check-in">Check-in</button></td>
                <td><button className="cancel-shift">Cancel</button></td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td>Item 3</td>
                <td>Item 3</td>
                <td><button className="check-in">Check-in</button></td>
                <td><button className="cancel-shift">Cancel</button></td>
              </tr>
              <tr>
                <td>Item 4</td>
                <td>Item 4</td>
                <td>Item 4</td>
                <td><button className="check-in">Check-in</button></td>
                <td><button className="cancel-shift">Cancel</button></td>
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
