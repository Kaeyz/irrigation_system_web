import server from '../server';
import { errorAlert } from './alertActions';
import { SET_MOISTURE_HISTORY_ACTIONS, SET_MOISTURE_HISTORY } from '../types';

const setIsLoading = (action, state) => {
  return { type: SET_MOISTURE_HISTORY_ACTIONS, payload: { action, state } };
};

const setPlots = (moistureHistory) => {
  return { type: SET_MOISTURE_HISTORY, payload: moistureHistory };
};

export const getMoistureHistory = (plotId) => dispatch => {
  dispatch(setIsLoading('getMoistureHistory', true));
  server.get(`/history/${plotId}`)
    .then(res => {
      dispatch(setPlots(res.data.data));
      dispatch(setIsLoading('getMoistureHistory', false));
    })
    .catch(err => {
      const { message } = err.response.data;
      dispatch(errorAlert(message));
      dispatch(setIsLoading('getMoistureHistory', false));
    });
};