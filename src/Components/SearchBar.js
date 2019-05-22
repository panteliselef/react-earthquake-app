import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			suggestions: []
		};
	}

	onUserInput = (e) => {
    let val = e.target.value;
    if(val !== ""){

      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?types=country,place&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
        .then(response=>response.json())
        .then(data=> {
  
          console.log(data.features);
          this.setState({suggestions:data.features});
        });
    }else{
      this.setState({suggestions:[]});
    }
		console.log(e.target.value);
  };

  selectPlace = (e) => {

    let id = e.target.id;
    let selectedPlace = this.state.suggestions.filter(sug => sug.id === id)[0];
    e.target.parentElement.previousSibling.value = selectedPlace.matching_place_name || selectedPlace.place_name;
    e.target.parentElement.style.visibility = "hidden";
    console.log("Selected:",selectedPlace);
    let url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&latitude=${selectedPlace.center[1]}&longitude=${selectedPlace.center[0]}&maxradiuskm=600`;
    fetch(url).then((response) => response.json()).then((data) => {
			console.log(data);
      this.props.updateFetchedData(data.features);
    });
    this.props.updateSelectedRegion(this.state.suggestions.filter(sug => sug.id === id));


  }

  onBlur = (e) => {
    e.target.nextSibling.style.visibility = "hidden";
  }

  onFocus = (e) => {
    e.target.nextSibling.style.visibility = "visible";
  }
	render() {
		return (
			<Row>
				<Col xsOffset={2} xs={8}>
					<div id="search-container" className="search-bar-container">
						<input id="search-field" onFocus={(e) => this.onFocus(e)} type="search" onInput={(e) => this.onUserInput(e)} placeholder="Search something" />
						<div id="search-bar-suggestion" className="search-bar-suggestions">
							{this.state.suggestions.map((sug) => {
                return (
                  <div onClick={(e) => this.selectPlace(e)} key={sug.id} id={sug.id}>{sug.matching_place_name || sug.place_name}</div>
                );
              })}
						</div>
					</div>
				</Col>
			</Row>
		);
	}
}

export default SearchBar;
