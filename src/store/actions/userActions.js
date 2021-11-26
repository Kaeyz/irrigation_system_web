import jwtDecode from 'jwt-decode';
import { setAuthToHeader, removeAuthFromHeader } from '../server/client';
import { getLoggedInUser, loginUser as loginUserRequest } from '../server/user';
import { appIsLoading, appNotLoading } from '../actions/appActions';
import { errorAlert, clearAlert, infoAlert } from './alertActions';
import { SET_AUTH, SET_USER, CLEAR_SESSION } from '../types';

const setIsAuthenticated = (state) => {
	return { type: SET_AUTH, payload: state };
};

const setUser = (user) => {
	return { type: SET_USER, payload: user };
};

export const isLoggedIn = () => {
	const token = localStorage.getItem('token');
	if (token) {
		const decoded = jwtDecode(token);
		const currentTime = Date.now() / 1000000000;
		if (decoded.exp < currentTime) {
			return false;
		} else {
			setAuthToHeader(token);
			return decoded;
		}
	} else {
		return false;
	}
};

export const setCurrentUser = async () => dispatch => {
	const decoded = isLoggedIn();
	if (decoded) {
		getLoggedInUser()
			.then(res => {
				dispatch(setUser(res));
				dispatch(setIsAuthenticated(true));
				dispatch(appNotLoading());
			})
			.catch(() => {
				dispatch(logoutUser());
			});
	} else {
		dispatch(logoutUser());
	}
};

export const loginUser = (userData) => dispatch => {
	dispatch(clearAlert());
	dispatch(infoAlert('Logging In'));
	loginUserRequest(userData)
		.then(res => {
			dispatch(appIsLoading());
			const { token } = res.data;
			localStorage.setItem('token', token);
			dispatch(setCurrentUser());
			dispatch(clearAlert());
		})
		.catch(err => {
			const error = err.response.data.message;
			dispatch(errorAlert({msg: error}));
			dispatch(appNotLoading());
		});
};

export const logoutUser = () => dispatch => {
	// Remove token from localStorage
	localStorage.removeItem('token');
	removeAuthFromHeader();
	dispatch({ type: CLEAR_SESSION });
	dispatch(appNotLoading());
};