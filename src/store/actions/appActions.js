
import { APP_IS_LOADING, APP_NOT_LOADING, SET_APP_IS_ACTIVE } from '../types';

export const appIsLoading = () => {
	return {
		type: APP_IS_LOADING,
	};
};

export const appNotLoading = () => {
	return {
		type: APP_NOT_LOADING,
	};
};

export const setAppIsActive = (state) => {
	return {
		type: SET_APP_IS_ACTIVE,
		payload: state
	};
};