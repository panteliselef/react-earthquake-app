//TODO: Add url parameter
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyApp from '../src/Components/MyApp';
import MetaTags from './Components/MetaTags';

function App() {
	return (
		<>
			<MetaTags/>
			<Router>
				<Route path="/" component={MyApp} />
			</Router>
		</>
	);
}

export default App;
