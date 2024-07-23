import React from 'react';
import ReactDOM from 'react-dom';
import HomeDashboard from './home-dashboard';
import ShiftBooking from './shift-booking';
import ShiftCreation from './create-shifts';

const root = document.getElementById('root');

if (root !== null) {
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(
    <React.StrictMode>
      <ShiftCreation />
    </React.StrictMode>
  );
}
