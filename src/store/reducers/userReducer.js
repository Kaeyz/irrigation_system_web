import { SET_USER, SET_USER_ACTIONS, SET_AUTH } from '../types';

const initialState = {
	isAuthenticated: false,
	user: {},
	isLoading: {
		state: false,
		loginUser: false,
		createUser: false,
		resetPassword: false,
		requestForgot: false,
		authenticateUser: false,
	}
};

export default function (state = initialState, action) {
	switch (action.type) {
	case SET_USER:
		return { ...state, user: action.payload };
	case SET_USER_ACTIONS:
		return {
			...state,
			isLoading: {
				...state.isLoading,
				state: action.payload.state,
				[action.payload.action]: action.payload.state
			}
		};
  case SET_AUTH:
		return {...state, isAuthenticated: action.payload};
	default:
		return state;
	}
}