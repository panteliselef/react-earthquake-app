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
	selectedRegion: null
};

const type = {
	UPDATED_VIEWPORT: 'UPDATED_VIEWPORT',
	UPDATED_SELECTED_QUAKE: 'UPDATED_SELECTED_QUAKE',
	UPDATED_SELECTED_REGION: 'UPDATED_SELECTED_REGION',
	UPDATED_USER_LOCATION: 'UPDATED_USER_LOCATION',
}

export const AppReducer = (state, action) => {
	console.log(action);
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
		default:
			break;
	}
};
