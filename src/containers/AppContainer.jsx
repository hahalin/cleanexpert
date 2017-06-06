// libraries
import React from 'react';

// containers
//import AppBarContainer from '../containers/AppBarContainer.jsx';
//import DashboardContainer from '../containers/DashboardContainer.jsx';
import NotificationContainer from '../containers/NotificationContainer.jsx';
//import ConfirmationContainer from '../containers/ConfirmationContainer.jsx';

import { Router, Route, hashHistory,Link } from 'react-router';


//<AppBarContainer />
//<ConfirmationContainer />	
//<NotificationContainer />
const App = ({ children }) => (
	<div className="">
     	 {children}
	    <NotificationContainer />
	</div>	      
)


export default App;
