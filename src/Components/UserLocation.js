import React, { useState } from 'react';
const UserLocation = (props) => {
	const { dispatch, viewport } = props;
	const [ isEnable, setEnable ] = useState(false);

	const toggleLocation = () => {
		if (isEnable) {
			setEnable(false);
			document.getElementsByClassName('location-icon')[0].children[0].setAttribute('fill', '#c3c3c3');
			dispatch({ type: 'UPDATED_USER_LOCATION', payload: null });
		} else {
			setEnable(true);
			document.getElementById('locationText').style.display = 'inline';
			document.getElementsByClassName('location-icon')[0].children[0].setAttribute('fill', '#35B4F6');
			getLocation();
		}
	};
	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				document.getElementById('locationText').style.display = 'none';
				dispatch({ type: 'UPDATED_USER_LOCATION', payload: position.coords });
				dispatch({
					type: 'UPDATED_VIEWPORT',
					payload: {
						...viewport,
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						zoom: 7
					}
				});
			});
		} else {
			console.error('Geolocation is not supported');
		}
	};

	return (
		<div onClick={(e) => toggleLocation(e)} className="user-location">
			<div>
				Use my Location{' '}
				<span id="locationText" className="loading">
					loading...
				</span>{' '}
			</div>
			<svg className="location-icon" style={{ width: '20px', height: '20px' }} viewBox="0 0 20 20">
				<path
					fill="#c3c3c3"
					d="M10,6.36363636 C12.0083082,6.36363636 13.6363636,7.99169182 13.6363636,10 C13.6363636,12.0083082 12.0083082,13.6363636 10,13.6363636 C7.99169182,13.6363636 6.36363636,12.0083082 6.36363636,10 C6.36363636,7.99169182 7.99169182,6.36363636 10,6.36363636 Z M1.86363636,10.9090909 L0,10.9090909 L0,9.09090909 L1.86363636,9.09090909 C2.27272727,5.3 5.3,2.27272727 9.09090909,1.86363636 L9.09090909,0 L10.9090909,0 L10.9090909,1.86363636 C14.7,2.27272727 17.7272727,5.3 18.1363636,9.09090909 L20,9.09090909 L20,10.9090909 L18.1363636,10.9090909 C17.7272727,14.7 14.7,17.7272727 10.9090909,18.1363636 L10.9090909,20 L9.09090909,20 L9.09090909,18.1363636 C5.3,17.7272727 2.27272727,14.7 1.86363636,10.9090909 Z M10,3.63636364 C6.48546068,3.63636364 3.63636364,6.48546068 3.63636364,10 C3.63636364,13.5145393 6.48546068,16.3636364 10,16.3636364 C13.5145393,16.3636364 16.3636364,13.5145393 16.3636364,10 C16.3636364,6.48546068 13.5145393,3.63636364 10,3.63636364 Z"
					id="Shape"
				/>
				/>
			</svg>
		</div>
	);
};
export default UserLocation;
