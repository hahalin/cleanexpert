import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,Link } from 'react-router';



export default  class Portal extends Component {

	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
			  <h2>Portal</h2>  			  
			  <section className="content">
	  	   		<div className="row">
			        <div className="col-lg-12">
			          <p>
			            <a href="#" className="btn btn-sq-lg btn-primary">
			                <i className="fa fa-shopping-cart fa-5x"></i><br/>
			                Demo Primary <br/>Button
			            </a>
			            <a href="#" className="btn btn-sq-lg btn-success">
			              <i className="fa fa-user fa-5x"></i>
			              <br/>
			              Demo Success 
			            </a>
			            <a href="#" className="btn btn-sq btn-info">
			              <i className="fa fa-user fa-5x"></i><br/>
			              Demo Info <br/>Button
			            </a>
			            <a href="#" className="btn btn-sq btn-warning">
			              <i className="fa fa-user fa-5x"></i><br/>
			              Demo Warning <br/>Button
			            </a>
			            <a href="#" className="btn btn-sq-sm btn-danger">
			              <i className="fa fa-user fa-5x"></i><br/>
			              Demo Danger <br/>Button
			            </a>
			          </p>
			        </div>
		        </div>	

				  <div className="row">
				        <div className="col-lg-3 col-xs-6">
				          <Link to="/home">
				          <div className="small-box bg-aqua">
				            <div className="inner">
				              <h3>150</h3>

				              <p>本日交易數</p>
				            </div>
				            <div className="icon">
				              <i className="fa fa-shopping-cart"></i>
				            </div>
				            <a href="#" className="small-box-footer">
				              More info <i className="fa fa-arrow-circle-right"></i>
				            </a>
				          </div>
				          </Link>
				        </div>
				        
				        <div className="col-lg-3 col-xs-6">
				          <div className="small-box bg-yellow">
				            <div className="inner">
				              <h3>44</h3>

				              <p>用戶註冊數</p>
				            </div>
				            <div className="icon">
				              <i className="ion ion-person-add"></i>
				            </div>
				            <a href="#" className="small-box-footer">
				              More info <i className="fa fa-arrow-circle-right"></i>
				            </a>
				          </div>
				        </div>
				        <div className="col-lg-3 col-xs-6">
				          <div className="small-box bg-red">
				            <div className="inner">
				              <h3>65</h3>

				              <p>匿名訪客數</p>
				            </div>
				            <div className="icon">
				              <i className="ion ion-pie-graph"></i>
				            </div>
				            <a href="#" className="small-box-footer">
				              More info <i className="fa fa-arrow-circle-right"></i>
				            </a>
				          </div>
				        </div>

				        <div className="col-lg-3 col-xs-6">
				          <div className="small-box bg-green">
				            <div className="inner">
				              <h3>53<sup style={{"fontSize":"20px"}}>%</sup></h3>

				              <p>Bounce Rate</p>
				            </div>
				            <div className="icon">
				              <i className="ion ion-stats-bars"></i>
				            </div>
				            <a href="#" className="small-box-footer">
				              More info <i className="fa fa-arrow-circle-right"></i>
				            </a>
				          </div>
				        </div>
			      </div>
			   </section>

			</div> 
		);
	}

}