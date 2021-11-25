
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
//import PrivateRoute from './PrivateRoute';

import Logout from '../views/auth/Logout';
import ForgetPage from '../views/auth/ForgetPage';
import Login from '../views/auth/Login';
import Password from '../views/auth/Password';


const AppRoutes = () => {
	return (
		<Router>
			<Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Logout />} />
        <Route path="/forgot" element={<ForgetPage />} />
        <Route path="/password" element={<Password />} />
{/*
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
 */}			</Routes>
		</Router>
	);
};

export default AppRoutes;