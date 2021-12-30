import { SET_PLOT, SET_PLOT_ACTIONS, SET_PLOTS, SET_PLOT_PAGE } from '../types';

const initialState = {
  plots: { data: [], count: 0, page: 1, limit: 10 },
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
	case SET_PLOT:
		return {...state, plot: action.payload};
		case SET_PLOT_PAGE:
			return { ...state, plots: { ...state.plots, page: action.payload } };
	case SET_PLOT_ACTIONS:
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