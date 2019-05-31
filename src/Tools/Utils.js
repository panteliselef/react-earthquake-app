export const getEarlierDate = (numOfDays) => {
	const today = new Date();
	today.setDate(today.getDate() - numOfDays);
	return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

export default class EarthQuakeUrl {
	constructor(parameters = {}) {
		this.parameters = {
			starttime: '2019-10-9',
			...parameters
		};
	}
	getUrl() {
		let prefix = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson`;
		let properties = Object.getOwnPropertyNames(this.parameters);
		const values = Object.values(this.parameters);
		properties = properties.map((prop, i) => {
			return `${prop}=${values[i]}`;
		});
		return [ prefix, properties ].flat().join('&');
	}
}

function degreesToRadians(degrees) {
	return degrees * Math.PI / 180;
}

export const distanceInKmBetweenEarthCoordinates = (lat1, lon1, lat2, lon2) => {
	var earthRadiusKm = 6371;

	var dLat = degreesToRadians(lat2 - lat1);
	var dLon = degreesToRadians(lon2 - lon1);

	lat1 = degreesToRadians(lat1);
	lat2 = degreesToRadians(lat2);

	var a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return earthRadiusKm * c;
};


export const matchColorToMag = (mag) => {
	return magnitudeColors.filter((item) => {
		return item.minValue <= mag && item.maxValue > mag;
	});
};

export const hexToRgb = (hex) => {
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)},0.4)` : null;
};

export const magnitudeColors = [
	{
		minValue: 0,
		maxValue: 2,
		color: '#4A7BA7'
	},
	{
		minValue: 2,
		maxValue: 3,
		color: '#04B4B3'
	},
	{
		minValue: 3,
		maxValue: 4,
		color: '#10CAC9'
	},
	{
		minValue: 4,
		maxValue: 5,
		color: '#F5A623'
	},
	{
		minValue: 5,
		maxValue: 6,
		color: '#FF7D50'
	},
	{
		minValue: 6,
		maxValue: 7,
		color: '#FC6644'
	},
	{
		minValue: 7,
		maxValue: 8,
		color: '#E75F40'
	},
	{
		minValue: 8,
		maxValue: 9,
		color: '#E13A20'
	},
	{
		minValue: 9,
		maxValue: 10,
		color: '#D93218'
	},
	{
		minValue: 10,
		maxValue: 20,
		color: '#C03823'
	}
];

