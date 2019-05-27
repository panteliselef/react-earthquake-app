import React, {useContext,useRef}from 'react';
import QuakeItem from '../Components/QuakeItem';
import QuakeContext from '../Context/QuakeContext';

function QuakeList(props) {
	const {quakes,downloadingData} = useContext(QuakeContext);
	return (
		<ul className="quakelist">
		{(downloadingData)
			? "loading"
			: quakes.map((quake) => {
				return (
					<QuakeItem key={quake.id} quake={quake}/>
				);
			})
		}
		</ul>
	);
}

export default QuakeList;
