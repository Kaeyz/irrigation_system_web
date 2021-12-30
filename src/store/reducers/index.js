import { combineReducers } from 'redux';
import { CLEAR_SESSION } from '../types';

import appReducer from './appReducer';
import alertReducer from './alertReducer';
import userReducer from './userReducer';
import deviceReducer from './deviceReducer';
import plotReducer from './plotReducer';
import moistureHistoryReducer from './moistureHistoryReducer';


const reducers = combineReducers({
  APP: appReducer,
  ALERT: alertReducer,
	USER: userReducer,
	DEVICES: deviceReducer,
	PLOTS: plotReducer,
	MOISTURE_HISTORY: moistureHistoryReducer,
});

const rootReducer = (state, action) => {
	// Clear all data in redux store to initial.
	if (action.type === CLEAR_SESSION) {
		state = undefined;
	}
	return reducers(state, action);
};


export default rootReducer;