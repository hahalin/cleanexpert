import React from 'react'
import ReactDOM from 'react-dom'
import {Toolbar,ToolbarButton,Page, Button,Icon, BackButton,Tab,Tabbar,
    List,ListItem,ListHeader,Modal,Switch,Input} from 'react-onsenui'

export default class CaseDetail extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  renderToolbar() {
  	//<div className="left"><BackButton>Back</BackButton></div>
    return (
      <Toolbar>
        <div className="left">
          <BackButton>回上頁</BackButton>
        </div>
        <div className="center">業主物件明細</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <section style={{textAlign: 'center'}}>
            <ListHeader style={{fontSize:'20px',paddingBottom:'8px',lineHeight:'20px'}}>
              
            </ListHeader>
            <ListItem style={{paddingLeft:'30px'}} key="1" tappable>            
               <label className='center' style={{marginLeft:'5px',textAlign:'center'}} >物件基本資料
               </label>
               <Icon className='right' icon="ion-chevron-right"></Icon>
            </ListItem>
            <ListItem style={{paddingLeft:'30px'}} key="2" tappable>            
               <label className='center' style={{marginLeft:'5px'}} >物件需求內容
               </label>
               <Icon className='right' icon="ion-chevron-right"></Icon>
            </ListItem>
        </section>
        <section style={{textAlign: 'center'}}>
          <Button>承接此案</Button>
        </section>
      </Page>
    );
  }
}