// SomePage.js
import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import LineGraph from './home-dashboard-graph';

export default function HomeDashboard() {
  return (
        
<div>
<Navbar />
<Sidebar />
      <div>
      <div className="dashboard-container">
        <div className="dashboard-box1">
          <h2>Welcome, John Doe</h2>
          <h5>Your next shift: </h5>
          <p>--------------------------------</p>
          <p className="stat-description">Skkr skrr</p>
        </div>
        <div className="dashboard-box2">
          <h5>Total shifts completed</h5>
          <h1>205</h1>
          <p className="stat-description">+33% from the previous month</p>
        </div>
        <div className="dashboard-box3">
          <h5>Total shifts completed</h5>
          <h1>205</h1>
          <p className="stat-description">+33% from the previous month</p>
        </div>
      </div>
      <div className="line-container">
      <LineGraph/>
      </div>
      
    </div>
</div>
    
  );
}
