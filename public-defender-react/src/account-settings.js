// SomePage.js
import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Caleb from './assets/Caleb (1).jpg';
export default function AccountSettings() {
  return (
       
<div>
    <Navbar/>
    <Sidebar/>
        <div style={{ marginLeft: '300px', marginTop: '110px' }}>
          <h1>Manage Account</h1>
        </div>
 
        <div className="account-container" style={{ marginLeft: '300px', marginTop: '30px' }}>
          <div className="user-profile" style={{ marginLeft: '10px', marginTop: '5px' }}>
            <img src={Caleb} alt="Profile Picture" id="profile-picture" /> {/* Ensure Caleb.jpg is imported or handled correctly */}
            <div className="text">
              <span className="user-name">Caleb Stifler</span>
              <br />
              <p>Change Profile Photo</p>
            </div>
          </div>
          <form>
            <div className="form-group" style={{ marginLeft: '10px', marginTop: '10px' }}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" />
            </div>
            <div className="form-group" style={{ marginLeft: '10px', marginTop: '10px' }}>
              <label htmlFor="email">Email</label>
              <br></br>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-group" style={{ marginLeft: '10px', marginTop: '10px' }}>
              <label htmlFor="management">Management</label>
              <input type="text" id="management" name="management" placeholder="Enter your management" />
            </div>
            <div className="form-group" style={{ marginLeft: '10px', marginTop: '10px' }}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
            <div className="form-group buttons" style={{ marginLeft: '20px', marginTop: '5px' }}>
              <button className="save-button" type="submit">
                Save Changes
              </button>
              <button className="cancel-button" type="button">
                Cancel
              </button>
            </div>
          </form>
        </div>
    </div>
    
  );
}
