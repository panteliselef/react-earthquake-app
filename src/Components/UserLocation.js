import React, { useState } from 'react';
const UserLocation = (props) => {
	const [ isEnable, setEnable ] = useState(false);

	const locationText = React.createRef();
	const changeColor = (e) => {		
		document.getElementById("locationText").style.display = 'inline';
		getLocation();
	};

	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				document.getElementById("locationText").style.display = 'none';
				console.log(position.coords);
				let v = {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					width: '100%',
					height: '100vh',
					zoom: 6
				};
				props.updateUserLocation(position.coords);
				props.updateViewPort(v);
				if (isEnable) {
			setEnable(false);
			document.getElementsByClassName('location-icon')[0].children[0].setAttribute('fill', '#c3c3c3');
		} else {
			setEnable(true);
			document.getElementsByClassName('location-icon')[0].children[0].setAttribute('fill', '#35B4F6');
		}
			});
		} else {
			console.error('Geolocation is not supported');
		}
	};

	return (
		<div onClick={(e) => changeColor(e)} className="user-location">
			<div>Use my Location <span id="locationText" className='loading'>loading...</span> </div>
			<svg className="location-icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 30 30">
				<path
					fill="#c3c3c3"
					d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z"
				/>
			</svg>
		</div>
	);
};
export default UserLocation;
