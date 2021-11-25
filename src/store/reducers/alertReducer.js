import { SUCCESS_ALERT, INFO_ALERT, ERROR_ALERT, CLEAR_ALERT } from '../types';

const initialState = {
	type: '',
	msg: '',
	duration: null,
	status: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ERROR_ALERT:
		return {
			...state,
			msg: action.payload,
			duration: null,
			type: 'error',
			status: true,
		};
	case SUCCESS_ALERT:
		return {
			...state,
			msg: action.payload,
			type: 'success',
			duration: null,
			status: true,
		};
	case INFO_ALERT:
		return {
			...state,
			msg: action.payload,
			status: true,
			type: 'info',
		};
	case CLEAR_ALERT:
		return initialState;
	default:
		return state;
	}
}