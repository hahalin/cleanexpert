import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Router, Route, hashHistory,Link } from 'react-router'
import ImageUploader from 'react-firebase-image-uploader'
import * as actions from '../actions/';
import firebase from 'firebase';
import {firebaseStorageRef} from '../core/firebase';

class UserProfile extends Component {

	constructor(props){
		super(props);
		
	}

	componentWillMount(){
		const properties = Object.getOwnPropertyNames(this.props.users);
		const userKey=this.props.params.uid;
        {properties.map((key) => {
        	if (key===userKey)
        	{
        		this.setState({
        			user:this.props.users[key]
        		});
        	}
        })}
	}

	toggleChange(){
		var user=this.state.user;
		user.approved=!user.approved;
	    this.setState({
	      user: user
	    });
	}

	handleSubmitForm(){
		//this.props.dispatch(
			this.props.submitUserProfile(this.state.user,this.props.params.uid)
		//);
	}

    handleUploadStart() { 
    	this.setState({isUploading: true, progress: 0});
	}

    handleProgress(progress){
    	this.setState({progress});
    }
    handleUploadError(error){
    	console.log(error);
        this.setState({isUploading: false});
    }
    handleUploadSuccess(filename){
        this.setState({progress: 100, isUploading: false});
        firebase.storage().ref().child('images/'+filename)
        .getDownloadURL()
        .then(url => {
        		var user={...this.state.user,goodManCardUrl:url};
        		this.setState({goodManCardUrl: url,user:user});
        	 });
    };

	render(){
		const {displayName,uid,email,approved,imageURL,goodManCardUrl} = this.state.user;
		var edApproved;
		if (approved)
		{
			edApproved=()=>{
				return <input type="checkbox"></input>
			}
		}
		else{
			edApproved=()=>{
				return <input type="checkbox"></input>
			}
		}

		const progress=()=>{
			if (this.state.isUploading===true)
			{
				return <div>{this.state.progress}</div>
			}
		}

		return(
			<section className="content">
		        <div className="col-md-6">
		          <div className="box box-info">
		            <div className="box-header with-border">
		              <h3 className="box-title">User Profile</h3>

		            </div>
		            <form
				      autoComplete="off"
				      className="form-horizontal"
					>
		              <div className="box-body">
		              	<div className="form-group">
		              		<img src={imageURL} />
		              	</div>
		                <div className="form-group">
		                  <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
		                  <div className="col-sm-10">
		                    <input value={email} type="email" className="form-control" id="inputEmail3" placeholder="Email">
		                    </input>
		                  </div>
		                </div>

		                <div className="form-group">
		                  <label for="inputEmail3" className="col-sm-2 control-label">
		                  	Approved
		                  </label>
		                  <div className="col-sm-10">
		                    <input type="checkbox" 
		                    	checked={approved} 
          						onChange={()=>{this.toggleChange();}}
		                    />
		                  </div>
		                  
		                </div>
		                <div className="form-group">
		                	{progress}
		                	<label className="col-sm-2 control-label">
		                		良民證
		                	</label>
			                {goodManCardUrl &&
	                        	<img src={goodManCardUrl} />
			                    }

		                    <ImageUploader
			                        name="avatar"
			                        storageRef={firebase.storage().ref('images')}
			                        onUploadStart={this.handleUploadStart.bind(this)}
			                        onUploadError={this.handleUploadError.bind(this)}
			                        onUploadSuccess={this.handleUploadSuccess.bind(this)}
			                        onProgress={this.handleProgress.bind(this)}
			                />
		                </div>

		              </div>
		              <div className="box-footer">
		                 <button type="button" class="btn btn-primary"
		                 	onClick={()=>{this.handleSubmitForm();}}
		                 >Submit</button>
        		         <Link to="/users" className="btn btn-default">返回</Link>

		              </div>
		            </form>
		          </div>
		        </div>

			</section>
		)
	}
}

function mapStateToProps(state) {
  return state
}

export default connect(
	mapStateToProps,actions
)(UserProfile)