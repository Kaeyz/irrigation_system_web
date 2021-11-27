import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: RouteComponent, isAuth, ...props }) => {
	const user = useSelector(state => state.USER);

	if (user.isAuthenticated === isAuth) {
		return <RouteComponent {...props} />;
	}

	return user.isAuthenticated ?  <Navigate to="/dashboard" /> : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
	element: PropTypes.any.isRequired,
	isAuth: PropTypes.bool.isRequired
};

export default PrivateRoute;