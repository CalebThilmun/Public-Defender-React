import React from 'react';
import ReactDOM from 'react-dom';
import HomeDashboard from './home-dashboard';
//import ShiftBooking from './shift-booking';

const root = document.getElementById('root');

if (root !== null) {
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(
    <React.StrictMode>
      <HomeDashboard />
    </React.StrictMode>
  );
}
