import React from 'react';
import distanceInKmBetweenEarthCoordinates from '../Tools/DegreesToRadians';
import locationIcon from '../Images/crosshairs-gps.svg';
import Button from '@material/react-button';
import magnitudeColors from '../Tools/magnitudeColors';
function QuakeList(props) {
	const matchColorToMag = (mag) => {
		return magnitudeColors.filter((item) => {
			return item.minValue <= mag && item.maxValue > mag;
		});
	};

	const getFeatureId = (e) => {
		console.log(e.target.parentElement.parentElement.parentElement.parentElement.id);
		return e.target.parentElement.parentElement.parentElement.parentElement.id;
	};
	const updateViewPort = (element, feature) => {

		props.updateSelectedQuake(feature);
		props.updateViewPort({
			...props.viewport,
			longitude: feature.geometry.coordinates[0],
			latitude: feature.geometry.coordinates[1],
			zoom: 10
		});
	};

	const hexToRgb = (hex) => {
		let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)},0.4)`
			: null;
	};

	return (
		<ul className="quakelist">
			{props.quakes.map((quake) => {
				let e = new Date(quake.properties.time);
				console.log(hexToRgb('#333333'));
				return (
					<li id={quake.id} key={quake.id}>
						<div className="myGrid">
							<div
								className="magnitude-container"
								style={{
									backgroundColor: matchColorToMag(quake.properties.mag)[0]
										? hexToRgb(matchColorToMag(quake.properties.mag)[0].color)
										: '#333'
								}}
							>
								<div
									className="magnitude-circle"
									style={{
										backgroundColor: matchColorToMag(quake.properties.mag)[0]
											? matchColorToMag(quake.properties.mag)[0].color
											: '#333'
									}}
								>
									<div className="magnitude">{quake.properties.mag}</div>
								</div>
							</div>
							<div style={{ margin: '1em', marginBottom: '0.5em' }}>
								<div className="title">{quake.properties.place}</div>

								<div className="time">{e.toLocaleString('el-GR')} </div>
								<div className="distance">
									<span>
										{(props.currLocation!=null)?
										`${distanceInKmBetweenEarthCoordinates(
											quake.geometry.coordinates[1],
											quake.geometry.coordinates[0],
											props.currLocation.latitude,
											props.currLocation.longitude
										).toFixed(0)} km from your location`
										: '- km from your locaiton'
										}
									</span>
									<img className="locationIcon" src={locationIcon} width="18px" height="18px" />
								</div>
								<hr />
								<Button
									style={{ color: matchColorToMag(quake.properties.mag)[0].color }}
									onClick={(e) => updateViewPort(e, quake)}
									children="no children"
									className=""
								>
									Pin Location
								</Button>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default QuakeList;
