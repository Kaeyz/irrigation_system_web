import jwtDecode from 'jwt-decode';
import server from '../server';
import { setAuthToHeader, removeAuthFromHeader } from '../server';
import { appIsLoading, appNotLoading } from '../actions/appActions';
import { errorAlert, clearAlert, infoAlert, successAlert } from './alertActions';
import { SET_AUTH, SET_USER, CLEAR_SESSION, SET_USER_ACTIONS } from '../types';

const setIsAuthenticated = (state) => {
	return { type: SET_AUTH, payload: state };
};

const setUser = (user) => {
	return { type: SET_USER, payload: user };
};

const setIsLoading = (action, state) => {
  return { type: SET_USER_ACTIONS, payload: { action, state } };
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

export const setCurrentUser = () => dispatch => {
	const decoded = isLoggedIn();
	if (decoded) {
		server.get('/users/me')
			.then(res => {
				dispatch(setUser(res.data.data));
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

export const loginUser = (userData, handleResponse) => dispatch => {
  dispatch(clearAlert());
  dispatch(setIsLoading('loginUser', true));
	dispatch(infoAlert('Logging In...'));
	server.post('/users/login', userData)
  .then(res => {
      dispatch(setIsLoading('loginUser', false));
      dispatch(appIsLoading());
			const { token } = res.data.data;
			localStorage.setItem('token', token);
			dispatch(setCurrentUser());
			dispatch(clearAlert());
		})
		.catch(err => {
      const error = err.response.data;
			dispatch(errorAlert(error.message));
      dispatch(setIsLoading('loginUser', false));
      handleResponse(error.data);
		});
};

export const logoutUser = () => dispatch => {
	// Remove token from localStorage
	localStorage.removeItem('token');
	removeAuthFromHeader();
	dispatch({ type: CLEAR_SESSION });
	dispatch(appNotLoading());
};

export const createUser = (userData, handleResponse) => dispatch => {
  dispatch(setIsLoading('createUser', true));
  dispatch(infoAlert('Creating user...'));
  server.post('/users', userData)
  .then(res => {
    dispatch(successAlert(res.data.message));
    handleResponse && handleResponse(null, true);
    dispatch(setIsLoading('createUser', false));
  })
  .catch(err => {
    const error = err.response.data;
    dispatch(errorAlert(error.message));
    handleResponse && handleResponse(error.data, null);
    dispatch(setIsLoading('createUser', false));
  });
};

export const requestForgot = (email, handleResponse) => dispatch => {
  dispatch(setIsLoading('requestForgot', true));
  dispatch(infoAlert('Requesting reset..'));
  server.post('/users/forgot', { email })
    .then(res => {
      dispatch(successAlert(res.data.message));
      handleResponse && handleResponse(null, true);
      dispatch(setIsLoading('forgotUser', false));
    })
    .catch(err => {
      const { message, data } = err.response.data;
      dispatch(errorAlert(message));
      handleResponse && handleResponse(data, null);
      dispatch(setIsLoading('requestForgot', false));
    });
};

export const verifyToken = (token, handleResponse) => dispatch => {
  dispatch(infoAlert('Verifying token...'));
  dispatch(setIsLoading('verifyToken', true));
  server.post('/users/verify', { token })
    .then(res => {
      const { message } = res.data;
      dispatch(successAlert(message));
      handleResponse && handleResponse(null, message);
      dispatch(setIsLoading('verifyToken', false));
    })
    .catch(err => {
      const { message } = err.response.data;
      dispatch(errorAlert(message));
      handleResponse && handleResponse(message, null);
      dispatch(setIsLoading('verifyToken', false));
    });
};

export const resetPassword = (data, handleResponse) => dispatch => {
  dispatch(infoAlert('Resetting Password...'));
  dispatch(setIsLoading('resetPassword', true));
  server.post('/users/reset-password', data)
    .then(res => {
      const { message, data } = res.data;
      dispatch(successAlert(message));
      dispatch(setIsLoading('resetPassword', false));
      dispatch(infoAlert('Logging In...'));
      dispatch(appIsLoading());
      localStorage.setItem('token', data.token);
      dispatch(setCurrentUser());
      dispatch(clearAlert());
    })
    .catch(err => {
      const { message, data } = err.response.data;
      dispatch(errorAlert(message));
      handleResponse && handleResponse(data, null);
      dispatch(setIsLoading('resetPassword', false));
    });
};