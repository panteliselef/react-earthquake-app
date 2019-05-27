export const initState = {
	currLocation: null,
	viewport: {
		latitude: 45.4221,
		longitude: -75.6903,
		width: '100%',
		height: '100vh',
		zoom: 2
	},
	fetchedData: [],
	selectedQuake: null,
	selectedRegion: null,
	toasts: [],
	downloadingData: false,
};

const type = {
	UPDATED_VIEWPORT: 'UPDATED_VIEWPORT',
	UPDATED_SELECTED_QUAKE: 'UPDATED_SELECTED_QUAKE',
	UPDATED_SELECTED_REGION: 'UPDATED_SELECTED_REGION',
	UPDATED_USER_LOCATION: 'UPDATED_USER_LOCATION',
	PUSHED_TOAST: 'PUSHED_TOAST',
	UPDATED_TOAST_STACK: 'UPDATED_TOAST_STACK',
	TOGGLE_DATA_DOWNLOADING: 'TOGGLE_DATA_DOWNLOADING',
};

export const AppReducer = (state, action) => {
	console.log("Action",action);
	console.log("State",state);
	switch (action.type) {
		case type.UPDATED_VIEWPORT: {
			return {
				...state,
				viewport: action.payload
			};
		}
		case type.UPDATED_SELECTED_QUAKE: {
			return {
				...state,
				selectedQuake: action.payload
			};
		}
		case type.UPDATED_SELECTED_REGION: {
			return {
				...state,
				selectedRegion: action.payload
			};
		}
		case type.UPDATED_USER_LOCATION: {
			return {
				...state,
				currLocation: action.payload
			};
		}
		case type.UPDATED_TOAST_STACK: {
			return {
				...state,
				toasts: action.payload
			};
		}
		case type.TOGGLE_DATA_DOWNLOADING: {
			return {
				...state,
				downloadingData: action.payload,
			}
		}
		case type.PUSHED_TOAST: {
			return {
				...state,
				toasts: action.payload
			};
		}
		default:
			return {...state}
	}
};
