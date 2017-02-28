import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar,ToolbarButton,Page, Button,Icon, BackButton,Tab,Tabbar,
		List,ListItem,ListHeader} from 'react-onsenui';
import SecondPage from './SecondPage'

import CaseList from './CaseList'
import MapPage from './MapPage'

var MyTab = React.createClass({
  renderToolbar: function() {
    return (
      <Toolbar>
      	<div className="left">
        	<BackButton>Back</BackButton>
        </div>
        <div className='center'>{this.props.title}</div>
      </Toolbar>
    );
  },

  render: function() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <section style={{margin: '16px'}}>
          <p>
            This is the <strong>{this.props.title}</strong> tab.
          </p>
        </section>
      </Page>
    );
  }
});



export default class CaseQuery extends React.Component {
  
  constructor(props) {
      super(props)  
      this.state={
      	index:0
      }
  }

  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  renderToolbar() {

    return (
      <Toolbar>
        <div className="left">
        	<BackButton>Back</BackButton>
        </div>
        <div className="center">工作清單 {this.state.index}</div>
      </Toolbar>
    );
  }

  changeTab()
  {

  }
  renderTabs() {
    return [
      {
        content: <CaseList title='表格清單' navigator={this.props.navigator} />,
        tab: <Tab label='表格清單' icon='fa-table' changeTab={()=>this.changeTab.bind(this)} />
      },
      {
        content: <MapPage title='地圖清單' />,
        tab: <Tab label='地圖清單' icon='ion-earth' changeTab={this.changeTab.bind(this)} />
      }
    ]
  }

  render() {
    return (
      // <Page renderToolbar={this.renderToolbar.bind(this)}>
      <Page>
        <Tabbar
	        index={this.state.index}
	        onPreChange={(event) =>
	          {
	            if (event.index != this.state.index) {
	              this.setState({index: event.index});
	            }
	          }
	        }
	        renderTabs={this.renderTabs.bind(this)}
      	/>
      </Page>
    );
  }
}