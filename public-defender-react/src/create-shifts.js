// SomePage.js
import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function ShiftCreation() {

    const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
        <Navbar />
        <Sidebar />
    <h2 className="page-heading">Shift Creation</h2>
      <br />
      <div id="calendar-container">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} inline />
      </div>

      <div id="time-picker">
            <input type="number" id="hour" name="hour" min="1" max="12" placeholder="HH" />
            <span id="time-picker-colon">:</span>
            <input type="number" id="minute" name="minute" min="0" max="59" placeholder="MM" />
            <select id="am-pm" name="am-pm">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          <button className="new-shift-creation">+ Create Shift</button>
          <button className="cancel-shift-creation">Cancel</button>
    </div>
     
  );
}
