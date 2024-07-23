// SomePage.js
import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function HomeDashboard() {
  return (
        
<div>
<Navbar />
<Sidebar />
      <div>
      <div className="dashboard-container">
        <div className="dashboard-box1">
          <h5>Shifts to complete</h5>
          <h1>8</h1>
          <p className="stat-description">Shifts remaining to complete this week</p>
        </div>
        <div className="dashboard-box2">
          <h5>Total shifts completed</h5>
          <h1>205</h1>
          <p className="stat-description">+33% from the previous month</p>
        </div>
        <div className="dashboard-box3">
          <h5>Total notational hours</h5>
          <h1>10,535</h1>
          <p className="stat-description">2.4% more than the previous year</p>
        </div>
      </div>

      <div className="bar-container">
        <div>
          <div className="bar" style={{height: '50px'}}></div>
          <div className="label">Label 1</div>
        </div>
        <div>
          <div className="bar" style={{height: '100px'}}></div>
          <div className="label">Label 2</div>
        </div>
        <div>
          <div className="bar" style={{height: '150px'}}></div>
          <div className="label">Label 3</div>
        </div>
        <div>
          <div className="bar" style={{height: '75px'}}></div>
          <div className="label">Label 4</div>
        </div>
        <div>
          <div className="bar" style={{height: '125px'}}></div>
          <div className="label">Label 5</div>
        </div>
        <div>
          <div className="bar" style={{height: '50px'}}></div>
          <div className="label">Label 6</div>
        </div>
        <div>
          <div className="bar" style={{height: '100px'}}></div>
          <div className="label">Label 7</div>
        </div>
        <div>
          <div className="bar" style={{height: '150px'}}></div>
          <div className="label">Label 8</div>
        </div>
      </div>
    </div>
    </div>
    
  );
}
