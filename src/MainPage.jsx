import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button} from 'react-onsenui';

import SecondPage from './SecondPage'
import MapPage from './MapPage'

export default class MainPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  callMapPage(){
    this.props.navigator.pushPage({component: MapPage});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Navigator</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this)}>Push page</Button>
        </p>
        <p style={{textAlign: 'center'}}>
          <Button modifier="material light" onClick={this.callMapPage.bind(this)}>Map page</Button>
        </p>
      </Page>
    );
  }
}