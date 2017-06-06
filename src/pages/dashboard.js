import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Router, Route, hashHistory,Link } from 'react-router'

import NotificationContainer from '../containers/NotificationContainer';
import * as actions from '../actions';
import { Dashboard, Header, Sidebar } from 'react-adminlte-dash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const nav = () => ([
  <Header.Item href="/some/link" key="1" />
]);

  class Sba extends Component {
    renderAuthButton(){
        if (this.props.auth.authenticated)
        {
          return (
            <Sidebar.Menu.Item title="登出" href="#" 
             onClick={()=>{this.props.signoutUser()}}
            ></Sidebar.Menu.Item>
          )
        }
        else{
          return (
            <Sidebar.Menu.Item title="登入" href="#" 
             onClick={()=>{this.props.signinUser()}}
            ></Sidebar.Menu.Item>
          )
        }

    }
          // <Sidebar.Menu.Item title="營運儀表" href="/portal" />
          // <Sidebar.Menu.Item title="用戶管理" href="/users" />
                  //<Sidebar.Menu header="導覽列" key="1">

    render(){
      return(
        <section className="sidebar">
          <ul className="sidebar-menu tree" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li>
              <Link to="/portal">
                <i className="fa fa-dashboard"></i><span>營運儀表</span>
              </Link>
            </li>

            <li>
              <Link to="/users">
                <i className="fa fa-user"></i><span>用戶管理</span>
              </Link>
            </li>

            <li className="treeview">
              <a href="#">
                <i className="fa fa-folder"></i>
                <span>基礎數據</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <Link to="/county">
                    <i className="fa fa-circle-o"></i>
                    <span>縣市鄉鎮</span>
                  </Link>
                </li>
              </ul>
            </li>

            {this.renderAuthButton()}
          </ul>
        </section>
      )
    }
  }


  
  Sba=connect(
    mapStateToProps,actions
  )(Sba)

  class Sbb extends Component {
    
    renderUserProfile(){
          if (this.props.auth.authenticated)
          {
              return(
                <Sidebar.UserPanel
                   image={this.props.auth.imageURL}
                   name={this.props.auth.displayName}
                   online={true}
                >
                </Sidebar.UserPanel>
              )
          }
          else
          {
            return (
              <div></div>
            )
          }
    }
    render(){
      return (
        <div>
          {this.renderUserProfile()}
        </div>
      )
    }
  }
  
  function mapStateToProps(state) {
    return state
  }
  
  Sbb=connect(
    mapStateToProps,actions
  )(Sbb)


const sb = () =>(
  [<Sbb />,<Sba />]
)




var AppDashBoard = ({ children }) => (
    <MuiThemeProvider>
      <Dashboard
        navbarChildren={nav()}
        sidebarChildren={sb()}
        theme="skin-blue"
      >
        <NotificationContainer />
        {children}
      </Dashboard>
    </MuiThemeProvider>
);

function mapStateToProps(state) {
  return state
}

export default connect(
    mapStateToProps,actions
)(AppDashBoard)

