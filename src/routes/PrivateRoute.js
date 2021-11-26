import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, user, isAuth, ...rest }) => (
	<Route
		{...rest}
		render = {props =>
			user.isAuthenticated === isAuth ? (
				<Component {...props} />
			) : (
				user.isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/" />
			)
		}
	/>
);

PrivateRoute.propTypes = {
	user: PropTypes.object.isRequired,
	component: PropTypes.any.isRequired,
	isAuth: PropTypes.bool.isRequired
};

PrivateRoute.defaultProps = {
	isAuth: true,
};

const mapStateToProps = state => ({
	user: state.user
});

export default connect(mapStateToProps)(PrivateRoute);