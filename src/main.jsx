import 'react-hot-loader/patch';
//import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import {Route,Router,browserHistory,IndexRoute} from 'react-router';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

import reducers from './reducers';
// Onsen UI Styling and Icons
//require('onsenui/stylus/blue-basic-theme.styl');
// import 'onsenui/css/onsenui.css';
//import 'onsenui/css/onsen-css-components.css';

import './public/bootstrap/css/bootstrap.min.css';
import './public/dist/css/AdminLTE.min.css';
import './public/dist/css/skins/_all-skins.css';
import './css/iconbutton.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';


import App from './App';
import AppContainer from './containers/AppContainer';
import Home from './pages/Home';
import Portal from './pages/portal';

import LoginPage from './components/pages/loginPage';


const createStoreWithMiddleware = applyMiddleware()(createStore);

const rootElement = document.getElementById('app');

// ReactDOM.render(
//     <Provider store={createStoreWithMiddleware(reducers)}>
//         <Router history={browserHistory}>
//             <Route path="/" component={AppContainer}>
//               <Route path="home" component={Home}></Route>
//               <Route path="portal" component={Portal}></Route>
//               <Route exact path="/Login" component={LoginPage}></Route>
//             </Route>
//         </Router>
//     </Provider>,
//     rootElement
// );

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Router history={browserHistory}>
              <Route path="/" component={AppContainer}>
                <Route path="home" component={Home}></Route>
                <Route path="portal" component={Portal}></Route>
                <Route exact path="/Login" component={LoginPage}></Route>
              </Route>
          </Router>
        </MuiThemeProvider>
    </Provider>,
    rootElement
);



if (module.hot && (1==0)) {
  // module.hot.accept('./components/app', () => {
  //   const NextApp = require('./components/app').default;
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Router history={browserHistory}>
              <Route path="/" component={AppContainer}>
                <Route path="home" component={Home}></Route>
                <Route path="portal" component={Portal}></Route>
                <Route exact path="/Login" component={LoginPage}></Route>
              </Route>
          </Router>
        </MuiThemeProvider>
      </Provider>
      ,
      rootElement
    );
  });
}
