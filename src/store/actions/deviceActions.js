import server from '../server';
import { errorAlert, infoAlert, successAlert } from './alertActions';
import { SET_DEVICE, SET_DEVICES, SET_DEVICE_ACTIONS, SET_DEVICE_PAGE } from '../types';

const setIsLoading = (action, state) => {
  return { type: SET_DEVICE_ACTIONS, payload: { action, state } };
};

const setDevices = (devices) => {
  return { type: SET_DEVICES, payload: devices };
};

const setDevice = (device) => {
  return { type: SET_DEVICE, payload: device };
};

export const onDevicePageChange = (page) => {
  return { type: SET_DEVICE_PAGE, payload: page };
};

export const addDevice = (deviceData, handleResponse) => dispatch => {
  dispatch(setIsLoading('addDevice', true));
  dispatch(infoAlert('Adding Device...'));
  server.post('/devices', deviceData)
  .then(res => {
    dispatch(successAlert(res.data.message));
    handleResponse && handleResponse(null, true);
    dispatch(getDevices());
    dispatch(setIsLoading('addDevice', false));
  })
  .catch(err => {
    const error = err.response.data;
    dispatch(errorAlert(error.message));
    handleResponse && handleResponse(error.data, null);
    dispatch(setIsLoading('addDevice', false));
  });
};

export const getDevices = () => (dispatch, getState) => {
  const page = getState().DEVICES.devices.page;
  dispatch(setIsLoading('getDevices', true));
  server.get(`/devices?page=${page}`)
    .then(res => {
      dispatch(setDevices(res.data.data));
      dispatch(setIsLoading('getDevices', false));
    })
    .catch(err => {
      const { message } = err.response.data;
      dispatch(errorAlert(message));
      dispatch(setIsLoading('getDevices', false));
    });
};

export const getDevice = (serialNumber) => dispatch => {
  dispatch(setIsLoading('getDevice', true));
  server.get(`/devices/${serialNumber}`)
    .then(res => {
      dispatch(setDevice(res.data.data));
      dispatch(setIsLoading('getDevice', false));
    })
    .catch(err => {
      const { message } = err.response.data;
      dispatch(errorAlert(message));
      dispatch(setIsLoading('getDevice', false));
    });
};