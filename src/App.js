//TODO: Add url parameter
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyApp from '../src/Components/MyApp';

function App() {
	return (
		<Router>
			<Route path="/" component={MyApp} />
		</Router>
	);
}

export default App;
