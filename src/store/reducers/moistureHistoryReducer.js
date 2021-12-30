import { SET_MOISTURE_HISTORY_ACTIONS, SET_MOISTURE_HISTORY, SET_MOISTURE_HISTORY_PAGE } from '../types';

const initialState = {
  moistureHistory: { data: [], count: 0, page: 1, limit: 10 },
	isLoading: {
    getMoistureHistory: false,
	}
};

export default function (state = initialState, action) {
	switch (action.type) {
	case SET_MOISTURE_HISTORY:
		return { ...state, moistureHistory: action.payload };
	case SET_MOISTURE_HISTORY_PAGE:
		return { ...state, moistureHistory: {...state.moistureHistory, page: action.payload} };
	case SET_MOISTURE_HISTORY_ACTIONS:
		return {
			...state,
			isLoading: {
				...state.isLoading,
				state: action.payload.state,
				[action.payload.action]: action.payload.state
			}
		};
	default:
		return state;
	}
}