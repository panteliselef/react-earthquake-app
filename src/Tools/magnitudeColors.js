// <!-- Color for an earthquake with magnitude 0 and 2 -->
//  <color name="magnitude1">#4A7BA7</color>

//  <!-- Magnitude circle color for an earthquake with magnitude between 2 and 3 -->
//  <color name="magnitude2">#04B4B3</color>

//  <!-- Magnitude circle color for an earthquake with magnitude between 3 and 4 -->
//  <color name="magnitude3">#10CAC9</color>

//  <!-- Magnitude circle color for an earthquake with magnitude between 4 and 5 -->
//  <color name="magnitude4">#F5A623</color>

//  <!-- Magnitude circle color for an earthquake with magnitude between 5 and 6 -->
//  <color name="magnitude5">#FF7D50</color>

//  <!-- Magnitude circle color for an earthquake with magnitude between 6 and 7 -->
//  <color name="magnitude6">#FC6644</color>

//  <!-- Magnitude circle color for an earthquake with magnitude between 7 and 8 -->
//  <color name="magnitude7">#E75F40</color>

//  <!-- Magnitude circle color for an earthquake with magnitude between 8 and 9 -->
//  <color name="magnitude8">#E13A20</color>

//  <!-- Magnitude circle color for an earthquake with magnitude between 9 and 10 -->
//  <color name="magnitude9">#D93218</color>

//  <!-- Magnitude circle color for an earthquake with magnitude over 10 -->
//  <color name="magnitude10plus">#C03823</color>

// var magnitudeColors = {
// 	magnitude1: {
// 		minValue: 0,
// 		maxValue: 2,
// 		color: '#4A7BA7'
// 	},
// 	magnitude2: {
// 		minValue: 2,
// 		maxValue: 3,
// 		color: '#04B4B3'
// 	},
// 	magnitude3: {
// 		minValue: 3,
// 		maxValue: 4,
// 		color: '#10CAC9'
// 	},
// 	magnitude4: {
// 		minValue: 4,
// 		maxValue: 5,
// 		color: '#F5A623'
// 	},
// 	magnitude5: {
// 		minValue: 5,
// 		maxValue: 6,
// 		color: '#FF7D50'
// 	},
// 	magnitude6: {
// 		minValue: 6,
// 		maxValue: 7,
// 		color: '#FC6644'
// 	},
// 	magnitude7: {
// 		minValue: 7,
// 		maxValue: 8,
// 		color: '#E75F40'
//   },
//   magnitude8: {
// 		minValue: 8,
// 		maxValue: 9,
// 		color: '#E13A20'
//   },
//   magnitude9: {
// 		minValue: 9,
// 		maxValue: 10,
// 		color: '#D93218'
//   },
//   magnitude10: {
// 		minValue: 10,
// 		maxValue: 20,
// 		color: '#C03823'
// 	},
// };

const magnitudeColors = [
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

export const matchColorToMag = (mag) => {
	return magnitudeColors.filter((item) => {
		return item.minValue <= mag && item.maxValue > mag;
	});
};

export const hexToRgb = (hex) => {
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)},0.4)` : null;
};

export default magnitudeColors;