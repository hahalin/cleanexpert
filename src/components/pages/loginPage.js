import React, { Component} from 'react';
import { connect } from 'react-redux';
//import Form from '../Form.react';
import auth from '../../utils/auth';
import { login } from '../../actions';

class LoginPage extends Component {

	render(){
		return <div>login</div>;
	}
}

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(LoginPage);
