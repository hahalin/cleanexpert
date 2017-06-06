import React from 'react';
import {connect} from 'react-redux';

import HeaderBar from '../components/header-bar/header-bar';

export default class Header extends React.Component {
	render(){
		return(
			<HeaderBar>
				<header className="mini-header">
				</header>
			</HeaderBar>	
		)
	}
}