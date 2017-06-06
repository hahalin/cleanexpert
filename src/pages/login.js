import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider,connect} from 'react-redux'

// const {
//   createStore,
//   applyMiddleware
// } = Redux;
import {
  Control,
  Form,
  Errors,
  combineForms,
  actions,
} from 'react-redux-form';

// const thunk = ReduxThunk.default;
// const logger = reduxLogger();

// const initialUserState = {
//   username: '',
//   password: '',
// };

// const store = createStore(combineForms({
//   user: initialUserState,
// }), applyMiddleware(thunk, logger));

const postLogin = (values) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
        reject({
          'message': 'Login failed!',
          username: 'User does not exist',
        });
      } else if (values.password !== 'beatles') {
        reject({
          'message': 'Login failed!',
          password: 'Wrong password',
        });
      } else {
        resolve(true);
        alert('Successfully submitted!');
        console.log(values);
      }
    });
  });
}

class UserLoginForm extends Component {

  constructor(props)
  {
  	super(props);
  }

  handleSubmit(values) {
    this.props.dispatch(actions.submit('deep.user', postLogin(values)));
  }

  renderAlert() {
  	console.log('renderAlert');
  	console.log(this.props.user);
    if (this.props.user.errors) {
      return (
        <Errors className="errors">
          <strong>Oops!</strong> {this.props.user.errors.message}
        </Errors>
      );
    }
  }
  //<Errors className="errors" model="deep.user" />
  render() {
    return (
      <Form model="deep.user" onSubmit={values => this.handleSubmit(values)}>
        
        <Errors className="errors" model="deep.user" />

        <p>
          Username is <strong>john</strong>, <strong>paul</strong>, <strong>george</strong>, or <strong>ringo</strong>.<br />
          Password is <strong>beatles</strong>.
        </p>
        
        {this.renderAlert()}

        <div className="field">
          <label>Username</label>
          <Control.text model=".username" />
        </div>
        
        <div className="field">
          <label>Password</label>
          <Control type="password" model=".password" />
        </div>

        <button type="submit">
          Log In
        </button>
        <Control.reset model="deep.user" className="secondary">
          Clear Values
        </Control.reset>
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return {
  	user:state.deep.user
  }
}


export default connect(mapStateToProps)(UserLoginForm);

