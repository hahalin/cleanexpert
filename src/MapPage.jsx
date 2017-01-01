import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';

export default class MapPage extends React.Component {

	renderToolbar() {
	    return (
	      <Toolbar>
	        <div className="left"><BackButton>Back</BackButton></div>
	        <div className="center">Map</div>
	      </Toolbar>
	    );
  	}

  	popPage() {
    	this.props.navigator.popPage();
 	}


	render() {
		// <Button onClick={this.pushPage.bind(this)}>Push page</Button>
	    return (
	    	<Page renderToolbar={this.renderToolbar}>
		        <p style={{textAlign: 'center'}}>
		          
		          <Button onClick={this.popPage.bind(this)}>Pop page</Button>
		        </p>
		        <div id="map_canvas"></div>
	      	</Page>
    	)
	}

}