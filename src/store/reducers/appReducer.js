import {APP_IS_LOADING, APP_NOT_LOADING } from '../types';

const initialState = {
	appIsLoading: true,
};

export default function (state = initialState, action) {
	switch (action.type) {
	case APP_IS_LOADING:
		return { ...state, appIsLoading: true };
	case APP_NOT_LOADING:
		return { ...state, appIsLoading: false };
	default:
		return state;
	}
}