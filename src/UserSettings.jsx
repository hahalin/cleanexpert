import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar,ToolbarButton,Splitter,SplitterSide,SplitterContent, 
  Page, Button,Icon,List,ListItem,ListHeader,Input
       } from 'react-onsenui';


export default class UserSettings extends React.Component {
	//<!--img src="http://lorempixel.com/image_output/nightlife-q-c-640-400-5.jpg"/-->
	render()
	{
		let DuckImage = require('./images/man2.jpg');
		return(
			<Page>
			    <div className="card-container manual-flip">
	    	    	<div className="card">
   	    		        <div className="front" >
	    		        	<div className="cover" style={{backgroundColor:"#333"}}>
	    		        	</div>
	        	          	<div className="user"  >
								<img className="img-square" src={DuckImage} src1="https://randomuser.me/api/portraits/women/67.jpg"/>
	            			</div>
	            			<div className="main">
				            	<h3 className="name">Frank Lin</h3>
				              	<p className="profession">
				              		<label>Programmer,Architecture,Leader</label>
				              		<br></br>
				              		<span className="label label-default">
				              			<Icon icon="fa-star" spin="true"></Icon>
				              			<Icon icon="fa-star" spin="true"></Icon>
				              			<Icon icon="fa-star" spin="true"></Icon>
				              			<Icon icon="fa-star-o" spin="false"></Icon>
				              			<Icon icon="fa-star-o" spin="false"></Icon>
				              		</span>
				              	</p>
		              	        <section style={{textAlign: 'center'}}>

			              		  <ListHeader style={{fontSize:'20px',paddingBottom:'8px',lineHeight:'20px'}}>
			              		  	
			              		  </ListHeader>
						    	  <ListItem style={{paddingLeft:'30px'}} key="1" tappable>            
						    	  	 <label className='center' style={{marginLeft:'5px',textAlign:'center'}} >用戶基本資料
						    	  	 </label>
						    	  	 <Icon className='right' icon="ion-chevron-right"></Icon>
						    	  </ListItem>
						    	  <ListItem style={{paddingLeft:'30px'}} key="2" tappable>            
						    	  	 <label className='center' style={{marginLeft:'5px'}} >接案管理設定

						    	  	 </label>
						    	  	 <Icon className='right' icon="ion-chevron-right"></Icon>
						    	  </ListItem>

				              	</section>

				            </div>
		            	</div>
	            	</div>
	            </div>
			</Page>
		)
	}
}
