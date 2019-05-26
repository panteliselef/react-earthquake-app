//TODO: add support for localStorage
import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl } from '@urbica/react-map-gl';
import Cluster from '@urbica/react-map-gl-cluster';
import magnitudeColors from '../src/Tools/magnitudeColors';
import { Grid, Row, Col } from 'react-flexbox-grid';
import QuakeList from '../src/Components/QuakeList';
import SearchBar from '../src/Components/SearchBar';
import '@material/react-button/dist/button.min.css';
import UserLocation from '../src/Components/UserLocation';
import '../src/fonts.css';
import '../src/App.css';
import { isFor } from '@babel/types';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
		this.url =
			'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-05-13&latitude=35.3400127&longitude=25.1343475&maxradiuskm=500';

		this.ClusterMarker = ({ longitude, latitude, pointCount }) => (
			<Marker longitude={longitude} latitude={latitude}>
				<div className="cluster-marker">{pointCount}</div>
			</Marker>
		);
	}

	updateUserLocation = (currLocation) => {
		this.setState({ currLocation: currLocation });
	};

	updateSelectedQuake = (quake) => {
		this.setState({ selectedQuake: quake });
	};

	updateViewPort = (viewport) => {
		this.setState({ viewport: viewport });
	};
	selectRegion = (item) => {
		this.setState({ selectedRegion: item });
	};

	updateFetchedData = (item) => {
		this.setState({ fetchedData: item });
	};

	componentDidMount() {
		fetch(this.url).then((response) => response.json()).then((data) => {
			console.log(data);
			this.setState({ fetchedData: data.features });
		});
	}
	matchColorToMag = (mag) => {
		return magnitudeColors.filter((item) => {
			return item.minValue <= mag && item.maxValue > mag;
		});
	};

	render() {
		return (
			<Grid fluid>
				<ReactMapGL
					latitude={this.state.viewport.latitude}
					longitude={this.state.viewport.longitude}
					zoom={this.state.viewport.zoom}
					style={{ width: '100%', height: '100vh' }}
					accessToken={process.env.REACT_APP_MAPBOX_TOKEN}
					mapStyle="mapbox://styles/elefcodes/cjvz1805a00cq1clmiekbyx1p"
					onViewportChange={(viewport) => {
						this.setState({ viewport: viewport });
					}}
				>
					{this.state.currLocation != null ? (
						<Marker
							latitude={this.state.currLocation.latitude}
							longitude={this.state.currLocation.longitude}
						>
							<div className="marker-btn mylocation" />
						</Marker>
					) : null}

					<Cluster radius={40} extent={512} nodeSize={64} component={this.ClusterMarker}>
						{this.state.fetchedData.map((quake) => (
							<Marker
								key={quake.id}
								latitude={quake.geometry.coordinates[1]}
								longitude={quake.geometry.coordinates[0]}
							>
								<div
									className="marker-btn"
									style={{
										backgroundColor: this.matchColorToMag(quake.properties.mag)[0]
											? this.matchColorToMag(quake.properties.mag)[0].color
											: '#333'
									}}
									onClick={(e) => {
										e.preventDefault();
										this.setState({ selectedQuake: quake });
									}}
								/>
							</Marker>
						))}
					</Cluster>

					{this.state.selectedQuake && (
						<Popup
							latitude={this.state.selectedQuake.geometry.coordinates[1]}
							longitude={this.state.selectedQuake.geometry.coordinates[0]}
							onClose={() => {
								this.setState({ selectedQuake: null });
							}}
						>
							<div>{this.state.selectedQuake.properties.title}</div>
						</Popup>
					)}
					<NavigationControl showCompass showZoom position="bottom-left" />
					<Row>
						<Col xs={9} md={9} sm={7}>
							<SearchBar
								updateFetchedData={this.updateFetchedData}
								updateSelectedRegion={this.selectRegion}
								updateViewPort={this.updateViewPort}
								viewport={this.state.viewport}
							/>
						</Col>
						<Col xs={3} md={3} sm={5}>
							<UserLocation
								updateViewPort={this.updateViewPort}
								updateUserLocation={this.updateUserLocation}
							/>
							<QuakeList
								updateSelectedQuake={this.updateSelectedQuake}
								featureList={this.state.fetchedData}
								viewport={this.state.viewport}
								updateViewPort={this.updateViewPort}
								quakes={this.state.fetchedData}
								currLocation={this.state.currLocation}
							/>
						</Col>
					</Row>
				</ReactMapGL>
			</Grid>
		);
	}
}

export default App;
