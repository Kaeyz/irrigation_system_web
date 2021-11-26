import client from './client';

exports.createUser = (data) => {
  client.post('/user', data)
    .then(res => res.data)
    .catch(err => err.response.data);
};

exports.loginUser = (data) => {
  client.post('/user/login', data)
    .then(res => res.data)
    .catch(err => err.response.data);
};

exports.forgotPassword = (data) => {
  client.post('/user/forgot', data)
    .then(res => res.data)
    .catch(err => err.response.data);
};

exports.resetPassword = (data) => {
  client.post('/user/reset', data)
    .then(res => res.data)
    .catch(err => err.response.data);
};

exports.getLoggedInUser = () => {
  client.get('/users/me')
    .then(res => res.data)
    .catch(err => err.response.data);
};

exports.logoutUser = () => {
  return true;
};