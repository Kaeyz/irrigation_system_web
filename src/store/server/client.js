import axios from 'axios';
import keys from '../../utils/keys';

const server = axios.create({
  baseURL: keys.server, auth: keys.auth,
});

export const setAuthToHeader = token => {
	server.defaults.headers['token'] = token;
	return;
};

export const removeAuthFromHeader = () => {
	delete server.defaults.headers['token'];
	return;
};

export default server;

