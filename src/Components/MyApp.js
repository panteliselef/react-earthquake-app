// React
import React, { useReducer, useEffect, useState } from 'react';
// MapBox
import ReactMapGL, { Marker, Popup, NavigationControl } from '@urbica/react-map-gl';
import Cluster from '@urbica/react-map-gl-cluster';
// CSS Grid
import { Grid, Row, Col } from 'react-flexbox-grid';
// My Components
import QuakeList from './QuakeList';
import SearchBar from './SearchBar';
import QuakeContext from '../Context/QuakeContext';
import SeachContext from '../Context/SearchContext';
import UserLocation from './UserLocation';
import { initState, AppReducer } from '../Reducers/AppReducer';
import ToastStack from './ToastStack';
import OfflinePopup from './OfflinePopup';
// Utils
import EarthQuakeUrl, {getEarlierDate,matchColorToMag} from '../Tools/Utils';
// CSS
import '@material/react-button/dist/button.min.css';
import '../fonts.css';
import '../App.css';


function MyApp(props) {
	const [ state, dispatch ] = useReducer(AppReducer, initState);
	const [ fetchedData, setFetchedData ] = useState([]);
	const [ appIsOffline, setAppIsOffline ] = useState(false);
	const ClusterMarker = ({ longitude, latitude, pointCount }) => (
		<Marker longitude={longitude} latitude={latitude}>
			<div className="cluster-marker">{pointCount}</div>
		</Marker>
	);

	setInterval(() => {
		if (navigator.onLine) {
			setAppIsOffline(false);
		} else {
			setAppIsOffline(true);
		}
	}, 5000);

	useEffect(
		() => {
			const query = new URLSearchParams(props.location.search);
			let queryObject = {};
			for (let value of query.keys()) {
				queryObject[value] = query.get(value);
				console.log(value, query.get(value));
			}
			console.log(queryObject);
			if(Object.entries(queryObject).length === 0 && queryObject.constructor === Object) {
				//NO QUERIES FOUND
			}else {
				findEarthQuakes(queryObject);
			}
			dispatch({ type: 'UPDATED_QUERY_OBJECT', payload: queryObject });
		},
		[ props.location ]
	);

	const findEarthQuakes = (queryObject) => {
		const url = new EarthQuakeUrl({
			starttime: getEarlierDate(30),
			minlatitude: queryObject.mnlat,
			minlongitude: queryObject.mnlon,
			maxlatitude: queryObject.mxlat,
			maxlongitude: queryObject.mxlon,
			limit: 50,
			orderby: 'time'
		});

		dispatch({
			type: 'TOGGLE_DATA_DOWNLOADING',
			payload: true
		});

		dispatch({
			type: 'UPDATED_VIEWPORT',
			payload: {
				...state.viewport,
				longitude: +queryObject.clon + 4,
				latitude: +queryObject.clat,
				zoom: 6
			}
		});

		fetch(url.getUrl())
			.then((response) => response.json())
			.then((data) => {
				if (data.features.length === 0) {
					dispatch({
						type: 'UPDATED_TOAST_STACK',
						payload: [
							...state.toasts,
							{
								timestamp: new Date(),
								type: 'toast',
								value: 'No earthquakes found'
							}
						]
					});
				}
				setFetchedData(data.features);
				dispatch({
					type: 'TOGGLE_DATA_DOWNLOADING',
					payload: false
				});
			})
			.catch((error) => console.error(error));
	};
	return (
		<Grid fluid>
			<ReactMapGL
				latitude={state.viewport.latitude}
				longitude={state.viewport.longitude}
				zoom={state.viewport.zoom}
				style={{ width: '100%', height: '100vh' }}
				accessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				mapStyle="mapbox://styles/elefcodes/cjvz1805a00cq1clmiekbyx1p"
				onViewportChange={(viewport) => {
					dispatch({ type: 'UPDATED_VIEWPORT', payload: viewport });
				}}
			>
				{state.currLocation != null ? (
					<Marker latitude={state.currLocation.latitude} longitude={state.currLocation.longitude}>
						<div className="marker-btn mylocation" />
					</Marker>
				) : null}

				<Cluster raduis={40} extent={512} nodeSize={64} component={ClusterMarker}>
					{fetchedData.map((quake) => (
						<Marker
							key={quake.id}
							latitude={quake.geometry.coordinates[1]}
							longitude={quake.geometry.coordinates[0]}
						>
							<div
								className="marker-btn"
								style={{
									backgroundColor: matchColorToMag(quake.properties.mag)[0]
										? matchColorToMag(quake.properties.mag)[0].color
										: '#333'
								}}
								onClick={(e) => {
									e.preventDefault();
									dispatch({ type: 'UPDATED_SELECTED_QUAKE', payload: quake });
								}}
							/>
						</Marker>
					))}
				</Cluster>

				{state.selectedQuake && (
					<Popup
						latitude={state.selectedQuake.geometry.coordinates[1]}
						longitude={state.selectedQuake.geometry.coordinates[0]}
						onClose={() => {
							dispatch({ type: 'UPDATED_SELECTED_QUAKE', payload: null });
						}}
					>
						<div>{state.selectedQuake.properties.title}</div>
					</Popup>
				)}

				<NavigationControl showCompass showZoom position="bottom-left" />

				{appIsOffline && (
					<Row>
						<Col xs={12}>
							<OfflinePopup />
						</Col>
					</Row>
				)}

				<Row>
					<Col xsOffset={0} xs={12} md={9} smOffset={1} mdOffset={0} sm={10}>
						<SeachContext.Provider
							value={{
								dispatch: dispatch,
								queryObject:state.queryObject
							}}
						>
							<SearchBar />
						</SeachContext.Provider>
						<ToastStack dispatch={dispatch} toasts={state.toasts} />
					</Col>
					<Col xsOffset={1} xs={10} mdOffset={0} md={3} smOffset={2} sm={8}>
						<div className="mobile-view">
							<UserLocation dispatch={dispatch} viewport={state.viewport} toasts={state.toasts}/>
							<QuakeContext.Provider
								value={{
									dispatch: dispatch,
									viewport: state.viewport,
									currLocation: state.currLocation,
									quakes: fetchedData,
									downloadingData: state.downloadingData
								}}
							>
								<QuakeList />
							</QuakeContext.Provider>
						</div>
					</Col>
				</Row>
			</ReactMapGL>
		</Grid>
	);
}

export default MyApp;
