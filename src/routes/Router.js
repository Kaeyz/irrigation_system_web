import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Register from '../views/auth/Register';
import ForgetPage from '../views/auth/ForgetPage';
import Login from '../views/auth/Login';
import ResetPassword from '../views/auth/ResetPassword';
import Dashboard from '../views/dashboard/Dashboard';

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
      </Routes>
    </Router>
  );
};

export default AppRoutes;

/*
  https://irrigate.netlify.app/reset/0D8BF9
*/