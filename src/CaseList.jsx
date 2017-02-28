import React from 'react'
import ReactDOM from 'react-dom'
import {Toolbar,ToolbarButton,Page, Button,Icon, BackButton,Tab,Tabbar,
		List,ListItem,ListHeader,Modal,Switch,Input} from 'react-onsenui'

//var CaseList = React.createClass({
class CaseList extends React.Component {
  
  constructor(props) {
      super(props) 
      this.state={
      	isModalOpen:false
      } 
  }	

  renderToolbar() {
        // <ToolbarButton>
       	// 	<Icon icon="fa-search,material:md-menu">回上頁</Icon>
        // </ToolbarButton>
    return (
      <Toolbar>
      	<div className="left">
         	<BackButton>回上頁</BackButton>
        </div>
                
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

  render() {
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
      	<section style={{margin: '16px'}}>
      		<h3>搜尋範圍:</h3>
			<section style={{marginTop:'3px'}}>	      		
				<h4>台北市</h4>
	      		<button className="tagbutton">大安區</button>
	      		<button className="tagbutton">信義區</button>
	      		<button className="tagbutton">天母區</button>
	      		<button className="tagbutton">內湖區</button>
      		</section>
      		<section style={{marginTop:'3px'}}>
	      		<h4>桃園市</h4>
	      		<button className="tagbutton">中壢區</button>
	      		<button className="tagbutton">楊梅區</button>
      		</section>
      	</section>
      	<hr></hr>
        <section style={{margin: '16px',marginTop:'5px'}}>
        	<h4>台北市</h4>
    		<ListHeader style={{fontSize:'20px',marginBottom:'5px'}}>大安區</ListHeader>
	    	<ListItem 
	    		style={{backgroundColor:'#d9edf7'}} 
	    		onClick={()=>{this.props.navigator.pushPage({component: SecondPage});}}
	    	>
	      		<div class="left">
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		      	</div>
		      	<div class="center">
		        	帝寶新成屋裝潢清潔
		      	</div>
	    	</ListItem>
	    	<ListItem style={{backgroundColor:'#d9edf7'}}>
	      		<div class="left">
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star-o" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		      	</div>
		      	<div class="center">
		        	陽明山豪宅整棟清潔
		      	</div>
	    	</ListItem>
	    	<ListItem style={{backgroundColor:'#d9edf7'}}>
	      		<div class="left">
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star-o" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star-o" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		      	</div>
		      	<div class="center">
		        	信義區101辦公大樓清潔
		      	</div>
	    	</ListItem>

	    	<ListHeader style={{fontSize:'20px',marginBottom:'5px'}}>信義區</ListHeader>
	    	<ListItem style={{backgroundColor:'#d9edf7'}}>
	      		<div class="left">
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		      	</div>
		      	<div class="center">
		        	帝寶新成屋裝潢清潔
		      	</div>
	    	</ListItem>
	    	<ListItem style={{backgroundColor:'#d9edf7'}}>
	      		<div class="left">
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star-o" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		      	</div>
		      	<div class="center">
		        	陽明山豪宅整棟清潔
		      	</div>
	    	</ListItem>
	    	<ListItem style={{backgroundColor:'#d9edf7'}}>
	      		<div class="left">
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star-o" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star-o" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		      	</div>
		      	<div class="center">
		        	信義區101辦公大樓清潔
		      	</div>
	    	</ListItem>

	    	<ListHeader style={{fontSize:'20px',marginBottom:'5px'}}>內湖區</ListHeader>
	    	<ListItem style={{backgroundColor:'#d9edf7'}}>
	      		<div class="left">
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		      	</div>
		      	<div class="center">
		        	帝寶新成屋裝潢清潔
		      	</div>
	    	</ListItem>
	    	<ListItem style={{backgroundColor:'#d9edf7'}}>
	      		<div class="left">
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star-o" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		      	</div>
		      	<div class="center">
		        	陽明山豪宅整棟清潔
		      	</div>
	    	</ListItem>
	    	<ListItem style={{backgroundColor:'#d9edf7'}}>
	      		<div class="left">
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star-o" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		        	<Icon icon="fa-star-o" class="list__item__icon" style={{color:'#ffad33'}}></Icon>
		      	</div>
		      	<div class="center">
		        	信義區101辦公大樓清潔
		      	</div>
	    	</ListItem>
        </section>

        
      </Page>
    );
  }
}

export default  CaseList