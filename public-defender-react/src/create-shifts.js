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

        <div id="shift-title-picker">
        <select className="shift-title-picker">
          <option value="">Please select a title for this shift...</option>
          <option value="link1">Standard Weekday Day-Shift</option>
          <option value="link2">Standard Weekday Night-Shift</option>
          <option value="link3">Weekend Day-Shift</option>
          <option value="link4">Weekend Night-shift</option>
          <option value="link5">Special Over-Time Shift</option>
        </select>

        </div>
          <button className="new-shift-creation">+ Create Shift</button>
          <button className="cancel-shift-creation">Cancel</button>
    </div>
     
  );
}
