
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Logout from '../views/auth/Logout';
import ForgetPage from '../views/auth/ForgetPage';
import Login from '../views/auth/Login';
import Password from '../views/auth/Password';
import Dashboard from '../views/auth/Password';


const AppRoutes = () => {
	return (
		<Router>
			<Routes>
        <PrivateRoute path="/" isAuth={false} element={<Login />} />
        <PrivateRoute path="/register" isAuth={false} element={<Logout />} />
        <PrivateRoute path="/forgot" isAuth={false} element={<ForgetPage />} />
        <PrivateRoute path="/password" isAuth={false} element={<Password />} />
        <PrivateRoute exact path="/dashboard" element={<Dashboard />} />
      </Routes>
		</Router>
	);
};

export default AppRoutes;