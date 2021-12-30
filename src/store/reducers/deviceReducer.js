import { SET_DEVICES, SET_DEVICE_ACTIONS, SET_DEVICE, SET_DEVICE_PAGE } from '../types';

const initialState = {
  devices: { data: [], count: 0, page: 1, limit: 10 },
  device: {},
  isLoading: {
    addDevice: false,
    getDevices: false,
    getDevice: false
  }
};

export default function (state = initialState, action) {
	switch (action.type) {
	case SET_DEVICES:
      return { ...state, devices: action.payload };
  case SET_DEVICE:
      return { ...state, device: action.payload };
    case SET_DEVICE_PAGE:
      return { ...state, devices: { ...state.devices, page: action.payload } };
	case SET_DEVICE_ACTIONS:
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