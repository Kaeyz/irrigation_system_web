
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
//import PrivateRoute from './PrivateRoute';

import Login from '../views/auth/Login';
//import Forgot from '../views/auth/Forgot';
//import Dashboard from '../views/dashboard/Dashboard';
/* import PriceSettings from '../views/dashboard/PriceSettings';
import PosMapping from '../views/dashboard/PosMapping';
import PosMappings from '../views/dashboard/pos/PosMappings';
import PosTransactions from '../views/dashboard/PosTransactions';
import Users from '../views/users/Users';
import UserTransactions from '../views/users/UserTransactions';
 */

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
        <Route path="/" element={<Login />} />
{/*
				<Route exact path="/forgot" component={Forgot} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<PrivateRoute exact path="/price_settings" component={PriceSettings} />
				<PrivateRoute exact path="/pos_mapping" component={PosMapping} />
				<PrivateRoute exact path="/pos_mappings" component={PosMappings} />
				<PrivateRoute exact path="/pos/:walletId/transactions" component={PosTransactions} />
				<PrivateRoute exact path="/users" component={Users} />
				<PrivateRoute exact path="/users/:walletId/transactions" component={UserTransactions} />
 */}			</Routes>
		</Router>
	);
};

export default AppRoutes;