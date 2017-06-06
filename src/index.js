import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory,browserHistory } from 'react-router'

import { createStore } from 'redux'
import { Provider,connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import configureStore from './store/configureStore'
import * as actions from './actions/';
const store = configureStore()

import reducers from './reducers';

import AppContainer from './containers/AppContainer';
import Home from './pages/Home';
import Portal from './Portal';

//<App />
ReactDOM.render(
  <Provider store={store}>
  	<Router history={browserHistory}>	    	
  	  <Route path="/" component={AppContainer}>
	  	<Route path="home" component={Home} />
	  	<Route path="portal" component={Portal} />
	  </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
