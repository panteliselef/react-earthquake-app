import React, { useState, useContext, useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import SearchContext from '../Context/SearchContext';
import { withRouter } from 'react-router-dom';
import {getEarlierDate} from '../Tools/Utils';
function SearchBar(props) {
	const [ suggestions, setSuggestions ] = useState([]);
	const { dispatch, queryObject } = useContext(SearchContext);

	const suggestionsRef = React.createRef();
	const searchInputRef = React.createRef();

	useEffect(
		() => {
			searchInputRef.current.value = queryObject.place_name || "";
		},
		[]
	);

	const onUserInput = (e) => {
		getEarlierDate(30);
		let val = e.target.value;
		if (val !== '') {
			fetch(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target
					.value}.json?&types=country,region&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
			)
				.then((response) => response.json())
				.then((data) => {
					setSuggestions(data.features);
				});
		} else {
			setSuggestions([]);
		}
	};

	const selectPlace = (e, selectedPlace) => {
		setSuggestions([]);
		e.target.parentElement.previousSibling.value = selectedPlace.matching_place_name || selectedPlace.place_name;
		props.history.push(
			`?&place_name=${selectedPlace.matching_place_name || selectedPlace.place_name}&mnlat=${selectedPlace
				.bbox[1]}&mnlon=${selectedPlace.bbox[0]}&mxlat=${selectedPlace.bbox[3]}&mxlon=${selectedPlace
				.bbox[2]}&clon=${selectedPlace.center[0]}&clat=${selectedPlace.center[1]}`
		);
		dispatch({ type: 'UPDATED_SELECTED_REGION', payload: selectedPlace });
	};

	const onBlur = (e) => {
		suggestionsRef.current.style.opacity = '0';
	};

	const onFocus = (e) => {
		suggestionsRef.current.style.opacity = '1';
	};
	return (
		<Row>
			<Col xsOffset={2} sm={10} smOffset={1} mdOffset={9} md={3} xs={8}>
				<div id="search-container" className="search-bar-container">
					<input
						ref={searchInputRef}
						id="search-field"
						onFocus={(e) => onFocus(e)}
						onBlur={(e) => onBlur(e)}
						type="search"
						onInput={(e) => onUserInput(e)}
						placeholder="Search something"
					/>
					<div id="search-bar-suggestion" ref={suggestionsRef} className="search-bar-suggestions">
						{suggestions.map((sug) => {
							return (
								<div onClick={(e) => selectPlace(e, sug)} key={sug.id} id={sug.id}>
									{sug.matching_place_name || sug.place_name}
								</div>
							);
						})}
					</div>
				</div>
			</Col>
		</Row>
	);
}
export default withRouter(SearchBar);
