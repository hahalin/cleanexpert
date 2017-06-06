import React from 'react';
import ReactDOM from 'react-dom';
import {Navigator} from 'react-onsenui';

import Portal from './Portal'

export default class App extends React.Component {
  
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;
    return React.createElement(route.component, props);

  }

  render() {
    return (
      <Portal>
        {this.props.children}
      </Portal>
    )
    return (
      <Navigator initialRoute={{component: Portal}} renderPage={this.renderPage} />
    );
  }
}