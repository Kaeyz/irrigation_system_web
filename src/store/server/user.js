import client from './client';

export const createUser = (data) => {
  client.post('/user', data)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const loginUser = (data) => {
  client.post('/user/login', data)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const forgotPassword = (data) => {
  client.post('/user/forgot', data)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const resetPassword = (data) => {
  client.post('/user/reset', data)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const getLoggedInUser = () => {
  client.get('/users/me')
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const logoutUser = () => {
  return true;
};