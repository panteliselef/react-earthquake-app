import React, { useContext } from 'react';
import QuakeContext from '../Context/QuakeContext';
import { matchColorToMag, hexToRgb } from '../Tools/magnitudeColors';
import distanceInKmBetweenEarthCoordinates from '../Tools/DegreesToRadians';
import locationIcon from '../Images/crosshairs-gps.svg';
import Button from '@material/react-button';
function QuakeItem(props) {
	const { quake } = props;
	const {properties,geometry} = quake;
	const { dispatch, currLocation, viewport } = useContext(QuakeContext);
	let e = new Date(quake.properties.time);
	const updateViewPort = (element, feature) => {
		dispatch({ type: 'UPDATED_SELECTED_QUAKE', payload: feature });

		dispatch({
			type: 'UPDATED_VIEWPORT',
			payload: {
				...viewport,
				longitude: feature.geometry.coordinates[0],
				latitude: feature.geometry.coordinates[1],
				zoom: 10
			}
		});
	};

	return (
		<li id={quake.id}>
			<div className="myGrid">
				<div
					className="magnitude-container"
					style={{
						backgroundColor: matchColorToMag(properties.mag)[0]
							? hexToRgb(matchColorToMag(properties.mag)[0].color)
							: '#333'
					}}
				>
					<div
						className="magnitude-circle"
						style={{
							backgroundColor: matchColorToMag(properties.mag)[0]
								? matchColorToMag(properties.mag)[0].color
								: '#333'
						}}
					>
						<div className="magnitude">{properties.mag}</div>
					</div>
				</div>
				<div style={{ margin: '1em', marginBottom: '0.5em' }}>
					<div className="title">{properties.place}</div>

					<div className="time">{e.toLocaleString('el-GR')} </div>
					<div className="distance">
						<span>
							{props.currLocation != null ? (
								`${distanceInKmBetweenEarthCoordinates(
									geometry.coordinates[1],
									geometry.coordinates[0],
									currLocation.latitude,
									currLocation.longitude
								).toFixed(0)} km from your location`
							) : (
								'- km from your locaiton'
							)}
						</span>
						<img alt="location-icon" className="locationIcon" src={locationIcon} width="18px" height="18px" />
					</div>
					<hr />
					<Button
						style={{ color: matchColorToMag(properties.mag)[0].color }}
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
}

export default QuakeItem;
