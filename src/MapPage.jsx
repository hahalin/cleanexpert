import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar,ToolbarButton,Page, Button,Icon, BackButton,Tab,Tabbar,
		List,ListItem,ListHeader,Modal,Switch,Input} from 'react-onsenui'

import InfoPage from './InfoPage'


const EIFFEL_TOWER_POSITION = {
		  lat: 24.956969,
		  lng: 121.1648806
		};


export default class MapPage extends React.Component {

	constructor(props) {
      super(props) 
      this.state={
      	isModalOpen:false
      } 
  	}	

	renderToolbar() {
	    return (
	      <Toolbar>
	        <div className="left"><BackButton>回上頁</BackButton></div>
	        
	        <div className='right'>
			<ToolbarButton 
				onClick={
					()=>this.setState({isModalOpen: true})
				}
			>
	       		<Icon icon="fa-search,material:md-menu">搜尋</Icon>
	        </ToolbarButton>
        </div>
	      </Toolbar>
	    );
  	}

  	popPage() {
    	//this.props.navigator.popPage();

    	var _this=this;
    	// _this.map=new google.maps.Map(this.refs.map, {
		   //  center: EIFFEL_TOWER_POSITION,
		   //  zoom: 16
	    // });
    	_this.map.getCameraPosition(function(camera) {
		   _this.map.animateCamera({
		     'target':  {lat: 24.956969, lng: 121.1648806},
		     'duration': 5000,
		     'zoom': 17,
		     'bearing': 140,
		      'tilt':60
		    });
		});
    	return;

    	this.map.animateCamera({
		    target: {lat: 24.956969, lng: 121.1648806},
		    zoom: 17,
		    tilt: 60,
		    bearing: 140,
		    duration: 5000
		}); 
 	}

 	componentDidMount() {
 		
		this.map = new google.maps.Map(this.refs.map, {
		    center: EIFFEL_TOWER_POSITION,
		    zoom: 16
	    });

		this.infowindow = new google.maps.InfoWindow({});

	    return;

 		  var div = document.getElementById("map");
 		  this.map = plugin.google.maps.Map.getMap(div);
 		  this.map.animateCamera({
		    target: EIFFEL_TOWER_POSITION,
		    zoom: 17,
		    tilt: 60,
		    bearing: 140,
		    duration: 5000
		  });
 		return;
 		

	}

	addMarker(){

		var latitudeAndLongitudeOne = EIFFEL_TOWER_POSITION;  //new google.maps.LatLng('24.956969','121.1648806');
        var contentString = "<html><body><div><p><h3><a class='doremi' href='#'>aaa</a>"+"test name"+"</h3></p></div></body></html>";

		var markerOne = new google.maps.Marker({
			position: {lat:24.957034,lng:121.163355},
            title: "Coordinates: "+" | Trailhead name: ",
			map: this.map
		});

        markerOne['infowindow'] = contentString;

		const _this=this;
		markerOne.addListener('click',function(){
			//ons.notification.alert('Hello world!');
		    _this.props.navigator.pushPage({component: InfoPage});

		});

		var marker2 = new google.maps.Marker({
			position: latitudeAndLongitudeOne,
			map: this.map,
			tid:1
		});
        marker2['infowindow'] = contentString;

        google.maps.event.addListener(marker2, 'click', function() {
        	alert(this.tid);
        	if (!_this.infowindow)
        	{
				_this.infowindow = new google.maps.InfoWindow({});
        	}
            _this.infowindow.setContent(this['infowindow']);
            _this.infowindow.open(_this.map, this);
		});		

		return;

		this.map.addMarker({
	      position: {lat: 24.956969, lng: 121.1648806},
	      title: "Welecome to \n" +
	             "Cordova GoogleMaps plugin for iOS and Android",
	      snippet: "This plugin is awesome!",
	      animation: plugin.google.maps.Animation.BOUNCE,
	      'icon':{
				url:iconBase+'sozialeeinrichtung.png'
			}
	    });
		return;
		var iconBase='images/';
		var latitudeAndLongitudeOne = EIFFEL_TOWER_POSITION;  //new google.maps.LatLng('24.956969','121.1648806');
		var markerOne = new google.maps.Marker({
			position: {lat:24.957034,lng:121.163355},
			map: this.map
			,'icon':{
				url:iconBase+'sozialeeinrichtung.png'
			}
		});

		
		markerOne.addListener('click',function(){
			//ons.notification.alert('Hello world!');
		    _this.props.navigator.pushPage({component: InfoPage});

		});

		var marker2 = new google.maps.Marker({
			position: latitudeAndLongitudeOne,
			map: this.map
		});
	}

	animateMap(){
		this.addMarker();
		return;
		debugger;
		this.map.animateCamera({
		    target: {lat: 24.956969, lng: 121.1648806},
		    zoom: 17,
		    tilt: 60,
		    bearing: 140,
		    duration: 5000
		  }, 
		  function() {
		    map.addMarker({
		      position: {lat: 24.956969, lng: 121.1648806},
		      title: "Welecome to \n" +
		             "Cordova GoogleMaps plugin for iOS and Android",
		      snippet: "This plugin is awesome!",
		      animation: plugin.google.maps.Animation.BOUNCE
		    }, function(marker) {

		      // Show the info window
		      marker.showInfoWindow();

		      // Catch the click event
		      marker.on(plugin.google.maps.event.INFO_CLICK, function() {

		        // To do something...
		        alert("Hello world!");

		      });
		    });
		   }
		);
	}

	render() {

		const mapStyle = {
	      width: '100%',
	      height: '100%',
	      border: '1px solid black'
	    };

		// <Button onClick={this.pushPage.bind(this)}>Push page</Button>
	    return (
	    	<Page renderToolbar={this.renderToolbar.bind(this)}
	    		renderModal={() => (
		          <Modal
		            isOpen={this.state.isModalOpen}
		            style={{}}
		          >
		            <section style={{marginLeft:'10px',marginRight:'30px'}}>
		              <p style={{opacity: 0.8}}>
		              </p>
		              <p style={{backgroundColor:'#ccebff'}}>
			              <ListHeader style={{fontSize:'20px',paddingBottom:'8px',lineHeight:'20px'}}>台北市</ListHeader>
				    	  <ListItem style={{paddingLeft:'30px'}} key="1" tappable>            
				    	  	 <label className='left'><Input type='checkbox' inputId="c1" /></label>
				    	  	 <label className='center' style={{marginLeft:'5px'}} htmlFor="c1">大安區</label>
				    	  </ListItem>
				    	  <ListItem style={{paddingLeft:'30px'}} key="2" tappable>            
				    	  	 <label className='left'><Input type='checkbox' inputId="c2" /></label>
				    	  	 <label className='center' style={{marginLeft:'5px'}} htmlFor="c2">信義區</label>
				    	  </ListItem>
			    	   	  <ListItem style={{paddingLeft:'30px'}} tappable>            
				    	  	 <label className='left'><Input type='checkbox' inputId="c3" /></label>
				    	  	 <label className='center' style={{marginLeft:'5px'}} htmlFor="c3">內湖區</label>
				    	  </ListItem>
				    	  <ListItem style={{paddingLeft:'30px'}} tappable>            
				    	  	 <label className='left'><Input type='checkbox' inputId="c4" /></label>
				    	  	 <label className='center' style={{marginLeft:'5px'}} htmlFor="c4">天母區</label>
				    	  </ListItem>

		  	              <ListHeader style={{fontSize:'20px',paddingBottom:'8px',lineHeight:'20px'}}>新北市</ListHeader>
				    	  <ListItem style={{paddingLeft:'30px'}}>            
				    	  	<Switch checked='On' /><span style={{marginLeft:'5px'}}>中和區</span>
				    	  </ListItem>
				    	  <ListItem style={{paddingLeft:'30px'}}>            
				    	  	<Switch checked='Off' /><span style={{marginLeft:'5px'}}>永和區</span>
				    	  </ListItem>
			    	  </p>
		              <p>
		                <Button onClick={() => this.setState({isModalOpen: false})} style={{margin:'5px'}}>
		                  <Icon icon="ion-checkmark"></Icon>
		                  確認
		                </Button>
		                <Button onClick={() => this.setState({isModalOpen: false})}>
		                  <Icon icon="ion-close-round"></Icon>
		                  關閉
		                </Button>
		              </p>
		            </section>
		          </Modal>
		        )}
	    	>
	    		<section
	    			style={{height:'0px'}}
	    		>
	    		</section>
		        <p style={{textAlign: 'center'}}>
		          <Button onClick={()=>{this.animateMap();}}>查看111222</Button>
		          <Button onClick={this.popPage.bind(this)}>查看2</Button>
		        </p>
		        <div id="map" ref="map" style={mapStyle}></div>
	      	</Page>
    	)
	}

}