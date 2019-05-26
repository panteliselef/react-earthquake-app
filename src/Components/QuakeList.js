import React, {useContext}from 'react';
import QuakeItem from '../Components/QuakeItem';
import QuakeContext from '../Context/QuakeContext';

function QuakeList(props) {
	const {quakes} = useContext(QuakeContext);
	return (
		<ul className="quakelist">
			{quakes.map((quake) => {
				return (
					<QuakeItem key={quake.id} quake={quake}/>
				);
			})}
		</ul>
	);
}

export default QuakeList;
