import { SET_PLOT, SET_PLOT_ACTIONS, SET_PLOTS } from '../types';

const initialState = {
  plots: [],
  plot: {},
	isLoading: {
    addPlot: false,
    getPlots: false,
    getPlot: false
	}
};

export default function (state = initialState, action) {
	switch (action.type) {
	case SET_PLOTS:
		return { ...state, plots: action.payload };
	case SET_PLOT_ACTIONS:
		return {
			...state,
			isLoading: {
				...state.isLoading,
				state: action.payload.state,
				[action.payload.action]: action.payload.state
			}
		};
  case SET_PLOT:
		return {...state, plot: action.payload};
	default:
		return state;
	}
}