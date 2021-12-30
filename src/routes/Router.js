import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Register from '../views/auth/Register';
import ForgetPage from '../views/auth/ForgetPage';
import Login from '../views/auth/Login';
import ResetPassword from '../views/auth/ResetPassword';
import Dashboard from '../views/dashboard/Dashboard';
import Plots from '../views/dashboard/Plots';
import Devices from '../views/dashboard/Devices';
import History from '../views/dashboard/History';

const AppRoutes = () => {
  const usePrivateRoute = (component, isAuth=true) => {
    return <PrivateRoute isAuth={isAuth} element={component} />;
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={usePrivateRoute(Login, false)} />
        <Route exact path="/login" element={usePrivateRoute(Login, false)} />
        <Route exact path="/register" element={usePrivateRoute(Register, false)} />
        <Route exact path="/forgot" element={usePrivateRoute(ForgetPage, false)} />
        <Route exact path="/reset/:token" element={usePrivateRoute(ResetPassword, false)} />
        <Route exact path="/dashboard" element={usePrivateRoute(Dashboard)} />
        <Route exact path="/devices" element={usePrivateRoute(Devices)} />
        <Route exact path="/plots" element={usePrivateRoute(Plots)} />
        <Route exact path="plots/history/:plotId" element={usePrivateRoute(History)} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
