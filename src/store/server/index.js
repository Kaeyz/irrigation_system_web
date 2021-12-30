import axios from 'axios';
import keys from '../../utils/keys';

const server = axios.create({
  baseURL: keys.server, auth: keys.auth,
});

/* server.interceptors.response.use(
	response => {
		return Promise.resolve(response);
	},
	error => {
		return Promise.reject(error);
	}); */

export const setAuthToHeader = token => {
	server.defaults.headers['token'] = token;
	return;
};

export const removeAuthFromHeader = () => {
	delete server.defaults.headers['token'];
	return;
};

export default server;
