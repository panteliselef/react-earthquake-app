import React from 'react';
import distanceInKmBetweenEarthCoordinates from '../Tools/DegreesToRadians';
import locationIcon from '../Images/crosshairs-gps.svg';
import Button from '@material/react-button';
import magnitudeColors from '../Tools/magnitudeColors';
function QuakeList(props) {
	const matchColorToMag = (mag) => {
		return magnitudeColors.filter((item) => {
			return item.minValue <= mag && item.maxValue > mag
		});
  };

	return (
		<ul className="quakelist">
			{props.quakes.map((quake) => {

        let e = new Date(quake.properties.time);
        return (
				<li key={quake.id}>
					<div style={{display:"flex",alignItems:"baseline"}}>
						<span className="magnitude" style={{color: (matchColorToMag(quake.properties.mag)[0]?matchColorToMag(quake.properties.mag)[0].color:"#333")}}>
              {quake.properties.mag}
            </span>
						<div className="title">{quake.properties.place}</div>
					</div>
          <div className="time">{ e.toLocaleString("el-GR") } </div>
					<div className="distance">
						<span>
							{`${distanceInKmBetweenEarthCoordinates(
								quake.geometry.coordinates[1],
								quake.geometry.coordinates[0],
								props.currLocation.latitude,
								props.currLocation.longitude
							).toFixed(0)} km from your location`}
						</span>
						<img className="locationIcon" src={locationIcon} width="18px" height="18px" />
					</div>
					<Button children="no children" className="">
						CLICK ME
					</Button>
          <Button children="no children" className="">
						CLICK ME
					</Button>
				</li>
			);})}
		</ul>
	);
}

export default QuakeList;
