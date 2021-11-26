import { combineReducers } from 'redux';
import { CLEAR_SESSION } from '../types';

import appReducer from './appReducer';
import alertReducer from './alertReducer';
import userReducer from './userReducer';


const reducers = combineReducers({
  APP: appReducer,
  ALERT: alertReducer,
  USER: userReducer
});

const rootReducer = (state, action) => {
	// Clear all data in redux store to initial.
	if (action.type === CLEAR_SESSION) {
		state = undefined;
	}
	return reducers(state, action);
};


export default rootReducer;