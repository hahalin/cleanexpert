import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Router, Route, hashHistory,Link } from 'react-router'
import * as actions from '../actions/';


class Users extends Component {

	constructor(props){
		super(props);
		this.props.startListeningToUserList();
	}

	renderUserList(users)
	{

		const properties = Object.getOwnPropertyNames(users);

		if (properties.length===0)
		{
			return (<div>loading...</div>);
		}
		return properties.map((key) => 
			(<tr>
				<td>{users[key].displayName}</td>
				<td>{users[key].email}</td>
				<td>
					{users[key].approved && 
						<label>V</label>
					}
				</td>
				<td>
					<Link className="nav-link" 
						to={ ()=>{return "/users/"+key;}}
					>
					編輯
					</Link>
				</td>		
			</tr>)
 		);
		
	}

	render(){
		
		const userList=this.renderUserList(this.props.users);
		return (
			<section className="content">
		        <div className="col-md-12">				
		        <h2>Users</h2>
				<div className="row">
					<div className="col-md-8">
						<table className="table table-bordered">
		                <tbody>
			                <tr>
			                  <th>名字</th>
			                  <th>Email</th>
			                  <th>approved</th>
			                  <th style={{"width":"100px"}}>操作</th>
			                </tr>
		                     {userList}
				         </tbody>
				         </table>
			         </div>
		         </div>
		         </div>
			</section> 
		);
	}
}

function mapStateToProps(state) {
  return state
}

export default connect(
	mapStateToProps,actions
)(Users)