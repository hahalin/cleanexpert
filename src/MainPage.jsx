import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar,ToolbarButton,Splitter,SplitterSide,SplitterContent, 
  Page, Button,Icon,List,ListItem
       } from 'react-onsenui';

import SecondPage from './SecondPage'
import CaseQuery from './CaseQuery'
import MapPage from './MapPage'
import UserSettings from './UserSettings'

export default class MainPage extends React.Component {

  constructor(props) {
      super(props)  

      this.state={
        isOpen: false,
        page:'default',        
        title:'功能表'
      }
  }

  pushPage() {
    this.props.navigator.pushPage({component: CaseQuery});
  }

  callMapPage(){
    this.props.navigator.pushPage({component: MapPage});
  }

  hide() {
    this.setState({
        isOpen: false
    })
  }


  renderToolbar() {
    const _this=this
    return (

      <Toolbar>
        <div className='left'>
          <ToolbarButton onClick={()=>_this.setState({isOpen:true})}>
            <Icon icon='ion-navicon, material:md-menu' />
          </ToolbarButton>
        </div>
        <div className='center'>{this.state.title}</div>
      </Toolbar>
    )
  }

  showPage(){
    if (this.state.page==='UserSettings')
    {
      //this.props.navigator.pushPage({component: UserSettings});
      return(
        <UserSettings>
        </UserSettings>
      )
    }
    else if (this.state.page==='default')
    {
      let DuckImage = require('./images/pexels-photo-243148.jpeg');

      let bannerStyle = {
          backgroundImage: 'url(' + DuckImage + ')',
          backgroundSize:'100% 100%',
          height: '100%',
          opacity:0.6,
          height:'100%',position:'absolute',left:0,top:0,right:0,bottom:0
          //backgroundSize: this.props.image.backgroundSize,
          //backgroundPosition: this.props.image.backgroundPosition,
      }

      return (
        <div>
        <div style={bannerStyle} />
        <div style={{height:'100%',position:'absolute',left:0,top:0,right:0,bottom:0}}>
          <section styles={{
            margin: '16px auto',textAlign:'center',width:'100%',position:'relative',
            border:'1px dashed blue',display:'block'
          }} >
              
              <Button className="bigbutton" icon='fa-map-marker'
                 
                onClick={()=>{this.hide();this.callMapPage();}}
              >
                <Icon icon='fa-map-marker' />
                查地圖
              </Button> 
              <Button className="bigbutton"  
              
              onClick={()=>{this.hide();this.pushPage();}}
              >
              <Icon icon='fa-tasks' />
              找工作
              </Button>  

          </section>
        </div>
        </div>
      )
    }
  }

  render() {

    let ContentPage=this.showPage()

    return (
      <Page >
        <Splitter>
          <SplitterSide
            style={{
                boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
            }}
            side='left'
            width={200}
            collapse={true}
            isSwipeable={true}
            isOpen={this.state.isOpen}
            onClose={this.hide}
            onOpen={this.showa}
          >
            <Page>
              
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
            </Page>
          </SplitterSide>
          <SplitterContent >
            <Page renderToolbar={()=>this.renderToolbar()} >
                {ContentPage}
            </Page>
          </SplitterContent>
        </Splitter>
      </Page>
    )

    
  }
}