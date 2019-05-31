import React from 'react';
import { Helmet } from 'react-helmet';
import metaDataImg from '../Images/metadata-img.png'
function MetaTags() {
	return (
		<Helmet>
			<title>Earthquakes from All Over The Wolrd</title>
			<meta name="title" content="Earthquakes from All Over The Wolrd" />
			<meta
				name="description"
				content="Search for the most recent earthquakes all over the earth. Use your location to check if an earthquake occurred nearby you."
			/>

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://panteliselef.github.io/react-earthquake-app/" />
			<meta property="og:title" content="Earthquakes from All Over The Wolrd" />
			<meta
				property="og:description"
				content="Search for the most recent earthquakes all over the earth. Use your location to check if an earthquake occurred nearby you."
			/>
			<meta property="og:image" content={metaDataImg} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://panteliselef.github.io/react-earthquake-app/" />
			<meta property="twitter:title" content="Earthquakes from All Over The Wolrd" />
			<meta
				property="twitter:description"
				content="Search for the most recent earthquakes all over the earth. Use your location to check if an earthquake occurred nearby you."
			/>
			<meta property="twitter:image" content={metaDataImg} />
		</Helmet>
	);
}

export default MetaTags;
