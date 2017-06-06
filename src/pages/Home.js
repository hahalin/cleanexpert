import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {Route,Router,browserHistory,IndexRoute} from 'react-router';
// ui-library
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';

export default  class Home extends Component {

	constructor(props){
		super(props);
		console.log(props);

	}

	goBack(){
		browserHistory.push("/portal");
	}
	
	handleTouchTap() {
  		alert('onTouchTap triggered on the title component');
	}

	


	render(){

		const styles = {
		  title: {
		    cursor: 'pointer',
		  },
		};
		return (
			<div>
				<h2>Home</h2>
				 <AppBar
				    title={<span style={styles.title}>Title</span>}
				    onTitleTouchTap={this.handleTouchTap.bind(this)}
				    onLeftIconButtonTouchTap={this.goBack}
			        iconElementLeft={<IconButton><NavigationArrowBack /></IconButton>}
				    iconElementRight={<FlatButton label="Save" />}
				  />
			</div> 
		);
	}

}

//Home;