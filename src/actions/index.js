import { browserHistory } from 'react-router';

import {api_url} from '../constants/bootstrap'
import * as notificationActions from '../actions/notificationActions';
//import * as usersActions from '../actions/usersActions';
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

export function initFirebaseApp(){
	return dispatch => {
		firebaseAuth.onAuthStateChanged(function(user) {
	        // [START_EXCLUDE silent]
	        //document.getElementById('quickstart-verify-email').disabled = true;
	        // [END_EXCLUDE]
			
			const IdKey=constants.STARAGE_ID_KEY;
   	        const TokenKey=constants.STARAGE_Token_KEY;	        

   	        if (user) {
	          // User is signed in.
	          var displayName = user.displayName;
	          var email = user.email;
	          var emailVerified = user.emailVerified;
	          var photoURL = user.photoURL;
	          var isAnonymous = user.isAnonymous;
	          var uid = user.uid;
	          var providerData = user.providerData;
	          
	          let auth={};

	          if(user.provider === 'google' && user.google) {
			        auth = {
			          type: AUTH_USER,
			          uid: user.uid,
			          displayName: user.google.displayName || user.google.username,
			          email: user.google.email,
			          imageURL: user.google.profileImageURL
			        };
	          }
	          else
	          {
		          auth = {
			          type: AUTH_USER,
			          uid: user.uid,
			          displayName: user.displayName,
			          email: user.email,
			          imageURL: user.photoURL
		          };
	          }
	          dispatch(auth);

	          var usersRef=firebaseDb.ref("users");

			  var o=firebaseDb.ref('users/'+auth.uid).once('value')
			     .then(function(dataSnapshot){
			  		if (!dataSnapshot.val())
			  		{
			  			 firebaseDb.ref('users/' + auth.uid).set({
						    uid: auth.uid,
						    email: auth.email,
						    displayName:auth.displayName,
						    approved:false,imageURL: user.photoURL
						  });
			  		}
			     })

			   usersRef.child(key).transaction((data) => {
			    if (data.uid===auth.uid)
			    {
			    	data.imageURL=auth.imageURL;
			    }
			   });

	           dispatch(notificationActions.success(`Welcome, \n` + auth.displayName + `!`));

	    	 //      

	          //browserHistory.push('/home');
	        }
	        else
	        {
    	        dispatch({type:UNAUTH_USER})
	        }
	    })
	}
}

export function signinUser(params)
{
  return dispatch => {

    //firebaseAuth.signInWithEmailAndPassword("hahalin@gmail.com","ha1414")
  	   // .then(response => {
      //    dispatch({ type: AUTH_USER });
      //    //localStorage.setItem('token', response.data.token);
      //    console.log(response);
      //    browserHistory.push('/home');
      //  })
	//.catch(error => {
	var provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('profile');
	provider.addScope('email');

    firebaseAuth.signInWithPopup(provider)
    //firebaseAuth.signInWithEmailAndPassword("hahalin@gmail.com","ha1414")
	    .catch(error => {
		  	  var errorCode = error.code;
			  var errorMessage = error.message;
			  dispatch(authError(errorCode+":"+errorMessage));
	    });

  };
}

export const submitUserProfile = (model,key) => (dispatch, getState) => {
  const user = Object.assign({}, model);
  var usersRef=firebaseDb.ref("users");

  usersRef.child(key).transaction((data) => {
    data.approved = model.approved;
    if (model.goodManCardUrl)
    {
    	data.goodManCardUrl=model.goodManCardUrl;
    }
    return data;
  }, (error) => {
    if (error) {
      dispatch(notificationActions.error(`Oh no! Firebase transaction failed abnormally!`));
      console.log('Firebase transaction failed abnormally!', error);
    } else {
      //setHistory(constants.DECREASE_WIDGET_VALUE, key, getState());
      dispatch(notificationActions.success(`update user success!`));
      browserHistory.push('/users');
    }
  });

};


export function signoutUser() {
  return dispatch => {
  	firebaseAuth.signOut();
    dispatch({ type: UNAUTH_USER });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export const startListeningToUserList = () => (dispatch) => {
	var adaRef = firebaseDb.ref("users");
	adaRef.on('value', (snapshot) => {
		dispatch({
      		type: constants.RECEIVE_USERLIST_DATA,
      		data: snapshot.val()
      		//,count:snapshot.numChildren()
    	});
	});
};


export const startListeningToRoleList = () => (dispatch) => {
	var adaRef = firebaseDb.ref("roles");
	adaRef.on('value', (snapshot) => {
		dispatch({
      		type: constants.RECEIVE_ROLELIST_DATA,
      		data: snapshot.val()
    	});
	});
};

export const ADD_KV = (_gp,_k,_v) => ({
  type: 'ADD_KV',
  gp:_gp,
  k: _k,
  v: _v
})

const set_kvs=(r)=>{
	return {
		type:'GET_KV',
		gp:r.gp,
		fd:r.fd,
		data:r.data,
		op:'BROWSE'
	}
}

export const delete_kv=(id,gp)=>{
	return (dispatch, getState) => {
		$.ajax({
		  url: 'http://'+api_url+"/api/kv/index/",
		  method: "delete",
		  data: {id:id},
		  dataType: "json"
		})
		.success(function(r)
		{
			dispatch({type:'CLOSE_INPUT'})
			return dispatch(fetch_kvs(gp))
		})
	}
}

export const add_kv=(gp,v,sort)=>{
	return (dispatch,getState)=>{
		$.ajax({
		  url: 'http://'+api_url+"/api/kv/index/",
		  method: "POST",
		  data: {gp:gp,k:'',v:v,sort:sort},
		  dataType: "json"
		})
		.error(function(r){
			const o=JSON.parse(r.responseText)
			alert(o.message)
		})
		.success(function(r)
		{
			dispatch({type:'CLOSE_INPUT'})
			return dispatch(fetch_kvs(gp))
		})
	}
}

export const edit_kv=(id,gp,v,sort)=>{
	return (dispatch,getState)=>{
		$.ajax({
			  url: 'http://'+api_url+"/api/kv/index/",
			  method: "PUT",
			  data: {id:id,gp:gp,v:v,sort:sort},
			  dataType: "json"
		})
		.error(function(r){
			const o=JSON.parse(r.responseText)
			alert(o.message)
		})
		.success(function(r)
		{
			dispatch({type:'CLOSE_INPUT'})
			return dispatch(fetch_kvs(gp))
		})
	}
}

export const change_gp=(_gp)=>{
	return (dispatch, getState) => {
		dispatch({type:'CHANGE_GP',gp:_gp})
	}
}

export const fetch_kvs= (_gp)=>{
	return (dispatch, getState) => {
		return $.ajax({
			  url: 'http://'+api_url+"/api/kv/index/"+_gp,
			  method: "GET",
			  dataType: "json"
			})
			.done(function(r)
			{
				var fdlist=[];
				let columns;
				for (var key in r.fd) {
					fdlist.push(r.fd[key]);
				}

				return dispatch(set_kvs({gp:_gp,fd:fdlist,data:r.data}))

			})
	}
}

export const load_kvs = (_gp)=>{
	return (dispatch, getState) => {
		return dispatch(fetch_kvs(_gp))
	}
}
