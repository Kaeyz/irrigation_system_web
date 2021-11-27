import { SUCCESS_ALERT, INFO_ALERT, ERROR_ALERT, CLEAR_ALERT } from '../types';

const initialState = {
	type: '',
	message: '',
	duration: null,
	status: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ERROR_ALERT:
		return {
			...state,
			message: action.payload,
			duration: null,
			type: 'error',
			status: true,
		};
	case SUCCESS_ALERT:
		return {
			...state,
			message: action.payload,
			type: 'success',
			duration: null,
			status: true,
		};
	case INFO_ALERT:
		return {
			...state,
			message: action.payload,
			status: true,
			type: 'info',
		};
	case CLEAR_ALERT:
		return initialState;
	default:
		return state;
	}
}