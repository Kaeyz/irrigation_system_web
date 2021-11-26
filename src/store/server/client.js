import axios from 'axios';
import keys from '../../utils/keys';

const server = axios.create({
  baseURL: keys.server, auth: keys.auth,
});

export default server;

