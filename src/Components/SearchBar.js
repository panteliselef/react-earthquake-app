import React, { Component, useState } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import EarthQuakeUrl from '../Tools/EarthQuakeUrl';
import { timeout } from 'q';
function SearchBar(props) {
	const [ suggestions, setSuggestions ] = useState([]);

	const onUserInput = (e) => {
    getEarlierDate(30);
		let val = e.target.value;
		if (val !== '') {
			fetch(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target
					.value}.json?&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
			)
				.then((response) => response.json())
				.then((data) => {
          console.log(data.features);
          setSuggestions(data.features);
				});
		} else {
			setSuggestions([]);
		}
		console.log(e.target.value);
	};


  const getEarlierDate = (numOfDays) => {
    const today = new Date();
    today.setDate(today.getDate() - numOfDays);
    return `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
  }
	const selectPlace = (e) => {
		let id = e.target.id;
		let selectedPlace = suggestions.filter((sug) => sug.id === id)[0];
		e.target.parentElement.previousSibling.value = selectedPlace.matching_place_name || selectedPlace.place_name;
		e.target.parentElement.style.visibility = 'hidden';
		console.log('Selected:', selectedPlace);

		props.updateViewPort({
			...props.viewport,
			longitude: selectedPlace.center[0] + 4,
			latitude: selectedPlace.center[1],
			zoom: 6
		});

    const url = new EarthQuakeUrl({
      starttime:getEarlierDate(30),
      minlatitude: selectedPlace.bbox[1],
      minlongitude: selectedPlace.bbox[0],
      maxlatitude: selectedPlace.bbox[3],
      maxlongitude: selectedPlace.bbox[2],
      limit:50,
      orderby:"time"
    });
		fetch(url.getUrl())
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				props.updateFetchedData(data.features);
			})
			.catch((error) => console.error(error));

		props.updateSelectedRegion(suggestions.filter((sug) => sug.id === id));
	};

	const onBlur = (e) => {
		e.target.nextSibling.style.visibility = 'hidden';
	};

	const onFocus = (e) => {
		e.target.nextSibling.style.visibility = 'visible';
	};
	return (
		<Row>
			<Col xsOffset={2} sm={10} smOffset={1} mdOffset={2} md={8} xs={8}>
				<div id="search-container" className="search-bar-container">
					<input
						id="search-field"
						onFocus={(e) => onFocus(e)}
						type="search"
						onInput={(e) => onUserInput(e)}
						placeholder="Search something"
					/>
					<div id="search-bar-suggestion" className="search-bar-suggestions">
						{suggestions.map((sug) => {
							return (
								<div onClick={(e) => selectPlace(e)} key={sug.id} id={sug.id}>
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
