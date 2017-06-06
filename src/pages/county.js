// misc
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route, hashHistory,Link } from 'react-router';
import * as actions from '../actions/countyActions';
import '../scss/form.scss';

// ui-library
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

import * as notificationActions  from '../actions/notificationActions';
import * as countyActions  from '../actions/countyActions';
import * as constants from '../constants';

import * as firebase from 'firebase';
import {firebaseAuth,firebaseDb,firebaseApp} from '../core/firebase';
// formsy material-ui
//import {FormsyText} from 'formsy-material-ui';

class County extends Component {

	constructor(props){
		super(props);

		this.props.fetchCounty(this.props.dispatch);

		//this.handleOpenTownEdit=this.handleOpenTownEdit.bind(this);
		this.handleCloseTownEdit=this.handleCloseTownEdit.bind(this);
		this.handleSubmitTownEdit=this.handleSubmitTownEdit.bind(this);

		this.handleOpen=this.handleOpen.bind(this);
		this.handleClose=this.handleClose.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleOpenTownEdit(key){
	    this.props.dispatch({type:'SHOW_ADD_TOWN_DIALOG',parentKey:key});
	}
	handleCloseTownEdit(){
	    this.props.dispatch({type:'HIDE_TOWN_DIALOG'});
	}
	handleSubmitTownEdit(){
	    // if ($('#edTown').val().trim()=='')
	    // {
     //        this.props.dispatch(notificationActions.error(`error`));
     //        //this.props.showError('error');
	    // 	return;
	    // }

	    var $this=this;
	    this.props.addTownship(
 		    this.props.countyReducer.parentKey,
	    	$('#edTown').val().trim())
	    .then(()=>{
	    	$this.handleCloseTownEdit();
	    })

	  };
	handleOpen(){
	    this.props.dispatch({type:'SHOW_ADD_DIALOG'});
	  };

    handleClose(){
	    this.props.dispatch({type:'HIDE_ADD_DIALOG'});
	  };

	handleSubmit(){
	    if ($('#edCounty').val().trim()=='')
	    {
            //this.props.dispatch(notificationActions.error(`error`));
            //this.props.showError('error');
	    	//return;
	    }

	    var $this=this;
	    this.props.addCounty(
	    	$('#edCounty').val().trim()
	    )
	    .then(()=>{
	    	$this.handleClose();
	    	//return false;
	    })

	  };

	renderTownList(data)
	{
		const properties = Object.getOwnPropertyNames(data);

		if (data.length===0)
		{
			return (<ListItem primaryText="loading..."/>);
		}
		return properties.map((key) => 
		{
            return (
            	<ListItem primaryText={key}
            	  style={{marginLeft:'50px'}}
            	>
            	</ListItem>
            );
		});
	}

	renderCountyList(data)
	{

		const properties = Object.getOwnPropertyNames(data);

		if (data.length===0)
		{
			return (<ListItem primaryText="loading..."/>);
		}

		// <Link className="nav-link" 
		// 						to={ ()=>{return "/county/"+key;}}
		// 					  style={{'float':'right'}}
		// 				>
		// 					編輯
		// 				</Link>
						
		return properties.map((key) => 
		{
			var townshipView=<ListItem></ListItem>;
			if (data[key].township!==undefined)
			{
				townshipView=this.renderTownList(data[key].township);
			}
			return (
				<div>
					<ListItem primaryText={data[key].name}  
		            >
			        	
						<FloatingActionButton 
						 	style={{marginRight:20,'float':'right'}}
						 	mini={true} 
							onClick={()=>this.handleOpenTownEdit(key).bind(this)}
							label="新增鄉鎮"
						>
					      <ContentAdd />
					    </FloatingActionButton>

		            </ListItem>
		            {townshipView}
	            </div>
            );
		});

		return properties.map((key) => 
			(<tr>
				<td></td>
				<td>{data[key].name}</td>
				<td>
					<Link className="nav-link" 
						to={ ()=>{return "/county/"+key;}}
					>
					編輯
					</Link>
				</td>		
			</tr>)
 		);
		
	}

	render()
	{
		 
	 	const countyList=this.renderCountyList(this.props.countyReducer.data);
		

		const actions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onTouchTap={this.handleClose}
	        onClick={this.handleClose}
	      />,
	      <FlatButton
	        label="Submit"
	        primary={true}
	        disabled={false}
	        onTouchTap={this.handleSubmit}
     	    onClick={this.handleSubmit}
	      />

	    ];

	    const actionsTownEdit = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onTouchTap={this.handleCloseTownEdit}
	        onClick={this.handleCloseTownEdit}
	      />,
	      <FlatButton
	        label="Submit"
	        primary={true}
	        disabled={false}
	        onTouchTap={this.handleSubmitTownEdit}
     	    onClick={this.handleSubmitTownEdit}
	      />

	    ];

		return (
			<div>

				<Dialog
				    title='新增縣市'
				    modal={true}
				    open={this.props.countyReducer.showAddDialog}
  	                actions={actions}
				>
					<div>
						<TextField
					      hintText="請輸入縣市"
					      id='edCounty'
					    />
					</div>
				</Dialog>

				<Dialog
				    title='新增鄉鎮'
				    modal={true}
				    open={this.props.countyReducer.showAddTownDialog}
  	                actions={actionsTownEdit}
				>
					<div>
						<TextField
					      hintText="請輸入鄉鎮"
					      id='edTown'
					    />
					</div>
				</Dialog>

				<section className="content">
		        	<div className="col-md-12">				
			        <h2>縣市清單</h2>
			        <div className="row">
	       		        <RaisedButton label="新增縣市" 
	       		          onClick={this.handleOpen} 
      		              icon={<FontIcon className="muidocs-icon-custom-github" />}
	       		        />
			        </div>
					<div className="row">
						<div className="col-md-4 well">
							 <List>
            				 	<Subheader>縣市清單</Subheader>
            					{countyList} 	
            				 </List>
				         </div>
			         </div>
			         </div>
				</section> 
			</div>
		)
	}
}

function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
	return {
		dispatch:dispatch,
		fetchCounty:bindActionCreators(countyActions.fetchCounty,dispatch),
		addCounty:bindActionCreators(countyActions.addCounty,dispatch),
		addTownship:bindActionCreators(countyActions.addTownship,dispatch),
	    showError: bindActionCreators(notificationActions.error, dispatch),
	    showWarning: bindActionCreators(notificationActions.warning, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(County)