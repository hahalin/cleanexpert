import { browserHistory } from 'react-router';

import {api_url} from '../constants/bootstrap'
import * as notificationActions from '../actions/notificationActions';
import { firebaseConfig } from '../core/firebase/config';

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types';

import * as constants from '../constants';

import * as firebase from 'firebase';
import {firebaseAuth,firebaseDb,firebaseApp} from '../core/firebase';

export const fetchCounty = () => (dispatch) => {
	var countyRef=firebaseDb.ref().child('county');
	countyRef.orderByChild('name').on('value', (snapshot) => {
		dispatch({
	      	type: 'FETCH_COUNTY',
	      	data: snapshot.val()
    	});
	});
};

export const addCounty = (county) => (dispatch, getState) => {
  
  firebaseDb.ref('county/'+county).once('value')
     .then(function(dataSnapshot){
  		if (dataSnapshot.val())
  		{
	        dispatch(notificationActions.error(`資料重複`));
        	return;
  		}
  	});

 //  firebaseDb.ref('county')
 //  	.orderByChild('name')
 //  	.startAt(county).endAt(county)
	// .on('value', function(snapshot) { 
 //      var countyRow = snapshot.val();

 //      if (countyRow[Object.keys(countyRow)[0]].name == county) {
 //        dispatch(notificationActions.error(`資料重複`));
 //        return;
 //      }
 //  });

     

  var data={
  	 name:county
  };

  var newKey = firebaseDb.ref().child('county').push().key;
  var updates = {};
  updates['/county/' + county] = data;

  firebaseDb.ref().update(updates)
  .catch(error=>{
    if (error) {
      dispatch(notificationActions.error(`Oh no! Firebase transaction failed abnormally!`));
    } else {
      dispatch(notificationActions.success(`add county success!`));
    }
  });

  dispatch({type:'HIDE_ADD_DIALOG'})  

};