import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

import { Router, Route, hashHistory,Link } from 'react-router';

import {connect} from 'react-redux';

import * as actions from '../actions';

import {Toolbar,ToolbarButton,Splitter,SplitterSide,SplitterContent, 
  Page, Button,Icon,List,ListItem
       } from 'react-onsenui';

// import App from '../App';
import LoginPage from '../components/pages/loginPage';


class SideMenu extends Component {

  constructor(props) {
      super(props)
      //console.log(props);
  }

	showPage(){
	}

	hide() {
	    this.setState({
	        isOpen: false
	    })
	}


	authButton(){
      if (this.props.data.auth.isAuthenticated){
        return(
          <ListItem key="UserSignOut"
              onClick={()=>{
                this.props.authenicate(false);
              }}
          >
            <Icon className="ion-person" style={{marginRight:'5px'}}></Icon>
            登出
          </ListItem>
        )
      }
      else{
        return(
          <Link to="/signin" className="btn btn-login btn-nav">會員登入</Link>
        )
        return(
          <ListItem key="UserSignin"
              onClick={()=>{
                this.props.authenicate(true);
              }}
          >
            <Icon className="ion-person" style={{marginRight:'5px'}}></Icon>
          </ListItem>
        )
      }
	}
	
	render(){
    // return (
    //   <div>
    //   { this.authButton() }
    //   </div>
    // );

		return (
        <div>
      			<List>
                <ListItem key="Default" onClick={()=>
                  {
                    this.hide()
                    this.setState({page:'default',title:'功能表'})
                    this.showPage()
                  }}>
                  <Icon className="fa fa-navicon" style={{marginRight:'5px'}}></Icon>
                  功能表
                </ListItem>

                <ListItem key="home">
                    <Link to="/home">
                      <i className="fa fa-user"></i><span>Home</span>
                    </Link>
                </ListItem>

                <ListItem key="UserSettings" onClick={()=>
                  {
                    
                    this.setState({page:'UserSettings',title:'會員接案設定',isOpen: false})
                    this.showPage()
                    //this.hide()
                  }}>
                  <Icon className="ion-person" style={{marginRight:'5px'}}></Icon>
                  會員接案設定
                </ListItem>
      			</List>
            {this.authButton()}
        </div>
		)
	}
}

function mapStateToProps(state){
	return {
		data:state
	};
}

export default connect(mapStateToProps,actions)(SideMenu);
