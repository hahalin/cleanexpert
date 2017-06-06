import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Field,Fields,reduxForm, formValueSelector} from 'redux-form'
import * as actions from '../../actions';

class Signin extends Component {

  constructor(props)
  {
  	 super(props);
  }

  handleFormSubmit({email,password}) {
    // Need to do something to log user in
    this.props.initFirebaseApp();
    this.props.signinUser({email,password});
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;
    //<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
    const handleFormSubmit=this.handleFormSubmit;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email}  name="email" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} type="password" name="password" className="form-control" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


Signin= reduxForm({
  form: 'signin',
  fields: ['email', 'password']
},mapStateToProps,actions)(Signin);


Signin=connect(mapStateToProps,actions)(Signin);

export default Signin
