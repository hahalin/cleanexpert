import firebase from 'firebase';

import {firebaseAuth,firebaseDb} from '../core/firebase';

//import request from './fakeRequest';

/**
 * Authentication lib
 * @type {Object}
 */
var auth = {
  /**
   * Logs a user in
   * @param  {string}   username The username of the user
   * @param  {string}   password The password of the user
   * @param  {Function} callback Called after a user was logged in on the remote server
   */
  login(username, password, callback) {
    // If there is a token in the localStorage, the user already is
    // authenticated
    if (this.loggedIn()) {
      callback(true);
      return;
    }



    // request.post('/login', { username, password }, (response) => {
    //   if (response.authenticated) {
    //     localStorage.token = response.token;
    //     callback(true);
    //   } else {
    //     callback(false, response.error);
    //   }
    // });
  },
  /**
   * Logs the current user out
   */
  logout(callback) {
    //request.post('/logout', {}, () => {
      //callback(true);
    //});
	firebase.auth().signOut().then(function() {
	  callback(true);
	}).catch(function(error) {
	  // An error happened.
	});

  },
  /**
   * Checks if anybody is logged in
   * @return {boolean} True if there is a logged in user, false if there isn't
   */
  loggedIn() {
    return !!localStorage.token;
  },
  /**
   * Registers a user in the system
   * @param  {string}   username The username of the user
   * @param  {string}   password The password of the user
   * @param  {Function} callback Called after a user was registered on the remote server
   */
  // register(username, password, callback) {
  //   request.post('/register', { username, password }, (response) => {
  //     if (response.registered === true) {
  //       this.login(username, password, callback);
  //     } else {
  //       callback(false, response.error);
  //     }
  //   });
  // },
  onChange() {}
}

module.exports = auth;
