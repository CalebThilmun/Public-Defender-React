// SomePage.js
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function ViewAllShifts() {

    const [date, setDate] = useState(new Date());
    const [days, setDays] = useState([]);
  
    useEffect(() => {
      const month = date.getMonth();
      const year = date.getFullYear();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
  
      const newDays = [];
      for (let i = 1; i <= daysInMonth; i++) {
        newDays.push(i);
      }
      setDays(newDays);
    }, [date]);
  
    const goBack = () => {
      setDate(new Date(date.setMonth(date.getMonth() - 1)));
    };
  
    const goForward = () => {
      setDate(new Date(date.setMonth(date.getMonth() + 1)));
    };

  return (
       
<div>
<Navbar />
<Sidebar />
      <div>
      <h2 className="page-heading">View All Shifts</h2>
      <br />
      <br />
      <div id="monthly-calendar-container" className="monthly-calendar-container">
        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
          <button onClick={goBack} className="backward-forward-buttons">{"<"}</button>
          <h1 id="monthAndYear">{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</h1>
          <button onClick={goForward} className="backward-forward-buttons">{">"}</button>
        </div>
        <div id="monthly-calendar" className="monthly-calendar">
          {days.map((day, index) => (
            <div key={index} className="day">
              <h2>{day}</h2>
              <p>Test name</p>
              <p>Test booking</p>
            </div>
          ))}
        </div>
      </div>
    </div>
</div>
    
  );
}
