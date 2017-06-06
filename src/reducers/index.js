import { combineReducers } from 'redux'
// import {
//   Control,
//   Form,
//   Errors,
//   combineForms,
//   actions,
// } from 'react-redux-form';

import { reducer as formReducer } from 'redux-form';

import {kvs} from './kvs';
import authReducer from '../reducers/authReducer';

import rolesReducer from '../reducers/rolesReducer';
import usersReducer from '../reducers/usersReducer';

import notification from '../reducers/notificationReducer';


import countyReducer from '../reducers/countyReducer';



const rootReducer = combineReducers({
  forms:formReducer,
  auth:authReducer,
  notification,
  roles:rolesReducer,
  users:usersReducer,
  countyReducer:countyReducer,
  kvs
});

export default rootReducer