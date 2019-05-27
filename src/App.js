//TODO: add support for localStorage
//TODO: Add url parameter
import React, { useReducer, useEffect,useState } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl } from '@urbica/react-map-gl';
import Cluster from '@urbica/react-map-gl-cluster';
import EarthQuakeUrl from './Tools/EarthQuakeUrl';
import { matchColorToMag } from './Tools/magnitudeColors';
import { Grid, Row, Col } from 'react-flexbox-grid';
import QuakeList from './Components/QuakeList';
import SearchBar from './Components/SearchBar';
import QuakeContext from './Context/QuakeContext';
import SeachContext from './Context/SearchContext';
import '@material/react-button/dist/button.min.css';
import UserLocation from './Components/UserLocation';
import { initState, AppReducer } from './Reducers/AppReducer';
import '../src/fonts.css';
import '../src/App.css';
import ToastStack from './Components/ToastStack';

function App() {

  const [ state, dispatch ] = useReducer(AppReducer, initState);
  const[ fetchedData,setFetchedData] = useState([]);

	const ClusterMarker = ({ longitude, latitude, pointCount }) => (
		<Marker longitude={longitude} latitude={latitude}>
			<div className="cluster-marker">{pointCount}</div>
		</Marker>
  );

	// useEffect(() => {
	// 	let myUrl = new EarthQuakeUrl({
	// 		starttime: '2019-05-13',
	// 		latitude: 35.34,
	// 		longitude: 25.13,
	// 		maxradiuskm: 500
	// 	});

	// 	fetch(myUrl.getUrl()).then((response) => response.json()).then((data) => {
  //     console.log(data);
  //     setFetchedData(data.features);
	// 	});
	// }, []);


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
          dispatch({ type: 'UPDATED_VIEWPORT', payload: viewport })
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

				<Row>
					<Col xs={9} md={9} sm={7}>
          <SeachContext.Provider value={{
            dispatch:dispatch,
            setFetchedData:setFetchedData,
            viewport:state.viewport,
						downloadingData: state.downloadingData,
          }}>
						<SearchBar/>
          </SeachContext.Provider>
						<ToastStack dispatch={dispatch} toasts={state.toasts}/>
					</Col>
					<Col xs={3} md={3} sm={5}>
						<UserLocation dispatch={dispatch} viewport={state.viewport} />
						<QuakeContext.Provider
							value={{
								dispatch: dispatch,
								viewport: state.viewport,
								currLocation: state.currLocation,
								quakes: fetchedData,
								downloadingData:state.downloadingData
							}}
						>
							<QuakeList />
						</QuakeContext.Provider>
					</Col>
				</Row>

			</ReactMapGL>
		</Grid>
	);
}

export default App;
