import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeDashboard from './home-dashboard';
import ShiftBooking from './shift-booking';
import ShiftCreation from './create-shifts';
import ViewAllShifts from './view-all-shifts';
import DutyReportingForm from './duty-reporting-form';
import MyShifts from './my-shifts';
import ShiftCheckIn from './shift-check-in';

const root = document.getElementById('root');

if (root !== null) {
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/my-shifts" element={<MyShifts />} />
          <Route path="/shift-booking" element={<ShiftBooking />} />
          <Route path="/shift-check-in" element={<ShiftCheckIn />} />
          <Route path="/create-shifts" element={<ShiftCreation />} />
          <Route path="/view-all-shifts" element={<ViewAllShifts />} />
          <Route path="/duty-reporting-form" element={<DutyReportingForm />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
