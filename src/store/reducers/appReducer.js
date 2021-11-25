import {APP_IS_LOADING, APP_NOT_LOADING } from '../types';

const initialState = {
	isLoading: true,
};

export default function (state = initialState, action) {
	switch (action.type) {
	case APP_IS_LOADING:
		return { ...state, isLoading: true };
	case APP_NOT_LOADING:
		return { ...state, isLoading: false };
	default:
		return state;
	}
}