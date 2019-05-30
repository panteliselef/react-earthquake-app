import React, { useState, useContext } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import SearchContext from '../Context/SearchContext';
import EarthQuakeUrl from '../Tools/EarthQuakeUrl';
function SearchBar(props) {
	const [ suggestions, setSuggestions ] = useState([]);
	const { dispatch, viewport, setFetchedData, toasts } = useContext(SearchContext);

	const suggestionsRef = React.createRef();

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

	const getEarlierDate = (numOfDays) => {
		const today = new Date();
		today.setDate(today.getDate() - numOfDays);
		return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
	};
	const selectPlace = (e,selectedPlace) => {
		setSuggestions([]);
		e.target.parentElement.previousSibling.value = selectedPlace.matching_place_name || selectedPlace.place_name;

		dispatch({
			type: 'TOGGLE_DATA_DOWNLOADING',
			payload: true
		});

		dispatch({
			type: 'UPDATED_VIEWPORT',
			payload: {
				...viewport,
				longitude: selectedPlace.center[0] + 4,
				latitude: selectedPlace.center[1],
				zoom: 6
			}
		});

		const url = new EarthQuakeUrl({
			starttime: getEarlierDate(30),
			minlatitude: selectedPlace.bbox[1],
			minlongitude: selectedPlace.bbox[0],
			maxlatitude: selectedPlace.bbox[3],
			maxlongitude: selectedPlace.bbox[2],
			limit: 50,
			orderby: 'time'
		});

		fetch(url.getUrl())
			.then((response) => response.json())
			.then((data) => {

				if (data.features.length === 0) {
					dispatch({
						type: 'UPDATED_TOAST_STACK',
						payload: [
							...toasts,
							{
								timestame: new Date(),
								type: "toast",
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

		dispatch({ type: 'UPDATED_SELECTED_REGION', payload: selectedPlace});
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
									<div onClick={(e) => selectPlace(e,sug)} key={sug.id} id={sug.id}>
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

export default SearchBar;
