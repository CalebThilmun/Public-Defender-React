// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeDashboard from './home-dashboard';
import MyShifts from './my-shifts';
import ShiftBooking from './shift-booking';
import ShiftCheckIn from './shift-check-in';
import ViewAllShifts from './view-all-shifts';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeDashboard} />
        <Route path="/my-shifts" component={MyShifts} />
        <Route path="/shift-booking" component={ShiftBooking} />
        <Route path="/shift-check-in" component={ShiftCheckIn} />
        <Route path="/view-all-shifts" component={ViewAllShifts} />
      </Switch>
    </Router>
  );
};

export default Routes;
