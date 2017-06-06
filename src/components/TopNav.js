import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions';

class TopNav extends Component {

	renderAuthButton() {
		if (this.props.auth.authenticated)
		{
			return <div>
					{this.props.auth.email}
					<img src={this.props.auth.imageURL} width="75" />
					<button onClick={()=>{this.props.signoutUser()}}>Logout</button>
			       </div>
		}
		else
		{
			return <button>Login</button>

		}
	}

	render(){
		return(
		        <nav className="navbar navbar-default navbar-fixed-top" role="navigation" id="navbar">
		            <div className="navbar-header">
		                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
		                    <span className="sr-only">Toggle navigation</span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <a className="navbar-brand" href="index.html">
		                    <label className="titlefont" style={{'FontSize':'22px','color':'white'}}>
		                        ReactJS CRUD Demo
		                    </label>
		                </a>
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
)(TopNav)