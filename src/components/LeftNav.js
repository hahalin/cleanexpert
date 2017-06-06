import React, { Component, PropTypes } from 'react'
import { Router, Route, hashHistory,Link } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../actions/';

class LeftNav extends Component {

    renderAuthButton(){
        if (this.props.auth.authenticated)
        {
            return(
                <li>
                    <a href="#" style={{fontSize:'18px'}}
                        onClick={()=>{this.props.signoutUser()}}>
                        Logout
                    </a>
                </li>

            )
        }
        else{
            return(
                <li>
                    <a href="#" style={{fontSize:'18px'}}
                        onClick={()=>{
                            this.props.initFirebaseApp();
                            this.props.signinUser();
                        }}>
                        Signin
                    </a>
                </li>

            )
        }
    }

    renderAuthData(){
        if (this.props.auth.authenticated)
        {
            return (
                <li>
                    <div className="user-section">
                        <div className="user-section-inner">
                            <img src={this.props.auth.imageURL} alt="" />
                        </div>
                        <div className="user-info">
                            <div>{this.props.auth.displayName} </div>
                            <div className="user-text-online">
                                <span className="user-circle-online btn btn-success btn-circle ">
                                </span>&nbsp;Online
                            </div>
                        </div>
                    </div>
                </li>
            )
        }
        else
        {
            return(<li></li>);
        }
    }

	render(){

		return(

        <nav className="navbar-default navbar-static-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav" id="side-menu">

                    {this.renderAuthData()}
                    {this.renderAuthButton()}
                    
                    <li>
                        <a href="#" style={{fontSize:'18px'}}><i className="fa fa-table fa-fw"></i>系統設定<span className="fa arrow"></span></a>
                        <ul className="nav nav-second-level">
                            <li><Link to="/index" activeClassName="active">共用資料設定</Link></li>
                        </ul>    
                    </li>
                    <li>
                        <Link className="nav-link" to="/users">users</Link>
                    </li>
                </ul>
            </div>
        </nav>
		)
	}
}

function mapStateToProps(state) {
  return state
}

export default connect(
    mapStateToProps,actions
)(LeftNav)