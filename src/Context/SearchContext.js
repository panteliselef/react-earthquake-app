import React from 'react';

export default React.createContext({
	dispatch: ()=>{},
	viewport: {},
	setFetchedData:()=>{},
	downloadingData: null,
});
