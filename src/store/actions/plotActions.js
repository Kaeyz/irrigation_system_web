import server from '../server';
import { errorAlert, infoAlert, successAlert } from './alertActions';
import { SET_PLOTS, SET_PLOT, SET_PLOT_ACTIONS, SET_PLOT_PAGE } from '../types';

const setIsLoading = (action, state) => {
  return { type: SET_PLOT_ACTIONS, payload: { action, state } };
};

const setPlots = (devices) => {
  return { type: SET_PLOTS, payload: devices };
};

const setPlot = (device) => {
  return { type: SET_PLOT, payload: device };
};

export const onPlotPageChange = (page) => {
  return { type: SET_PLOT_PAGE, payload: page };
};

export const addPlot = (plotData, handleResponse) => dispatch => {
  dispatch(setIsLoading('addPlot', true));
  dispatch(infoAlert('Adding Plot...'));
  server.post('/plots', plotData)
  .then(res => {
    dispatch(successAlert(res.data.message));
    handleResponse && handleResponse(null, true);
    dispatch(getPlots());
    dispatch(setIsLoading('addPlot', false));
  })
  .catch(err => {
    const error = err.response.data;
    dispatch(errorAlert(error.message));
    handleResponse && handleResponse(error.data, null);
    dispatch(setIsLoading('addPlot', false));
  });
};

export const getPlots = () => (dispatch, getState) => {
  const page = getState().PLOTS.plots.page;
  dispatch(setIsLoading('getPlots', true));
  server.get(`/plots?page=${page}`)
    .then(res => {
      dispatch(setPlots(res.data.data));
      dispatch(setIsLoading('getPlots', false));
    })
    .catch(err => {
      const { message } = err.response.data;
      dispatch(errorAlert(message));
      dispatch(setIsLoading('getPlots', false));
    });
};

export const getPlot = (id) => dispatch => {
  dispatch(setIsLoading('getPlot', true));
  server.get(`/plots/${id}`)
    .then(res => {
      dispatch(setPlot(res.data.data));
      dispatch(setIsLoading('getPlot', false));
    })
    .catch(err => {
      const { message } = err.response.data;
      dispatch(errorAlert(message));
      dispatch(setIsLoading('getPlot', false));
    });
};