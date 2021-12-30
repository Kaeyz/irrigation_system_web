import server from '../server';
import { errorAlert } from './alertActions';
import { SET_MOISTURE_HISTORY_ACTIONS, SET_MOISTURE_HISTORY } from '../types';

const setIsLoading = (action, state) => {
  return { type: SET_MOISTURE_HISTORY_ACTIONS, payload: { action, state } };
};

const setPlots = (moistureHistory) => {
  return { type: SET_MOISTURE_HISTORY, payload: moistureHistory };
};

export const onMoistureHistoryPageChange = (page) => {
  return { type: SET_MOISTURE_HISTORY, payload: page };
};

export const getMoistureHistory = plotId => (dispatch, getState) => {
  const page = getState().MOISTURE_HISTORY.moistureHistory.page;
  dispatch(setIsLoading('getMoistureHistory', true));
  server.get(`/history/${plotId}?page=${page}`)
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