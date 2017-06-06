import * as constants from '../constants';
import initialState from '../utils/initialState';

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from '../actions/types';

import {firebaseAuth,firebaseDb,firebaseApp} from '../core/firebase';

var initialAuthState={};

var isAuthenticated = () => {
  if (firebaseAuth.currentUser)
  {
    return true;
  }
  var id=localStorage.getItem(constants.STARAGE_ID_KEY);
  var token=localStorage.getItem(constants.STARAGE_TOKEN_KEY);
}


if (isAuthenticated())
{

  user=firebaseAuth.currentUser;
  initialAuthState={...initialState,
      error: '', 
      authenticated: true ,
      displayName: user.displayName,
      uid: user.uid,
      email: user.email,
      imageURL: user.imageURL
  }
}

export default function(state = initialAuthState, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, 
        error: '', 
        authenticated: true ,
        displayName: action.displayName,
        uid: action.uid,
        email: action.email,
        imageURL: action.imageURL
      };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_MESSAGE:
      return { ...state, message: action.payload };
  }

  return state;
}

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case constants.ATTEMPTING_LOGIN:
//       return Object.assign({}, initialState, {
//         currently: constants.AWAITING_AUTH_RESPONSE,
//       });

//     case constants.LOGOUT:
//       return Object.assign({}, initialState);

//     case constants.LOGIN_USER:
//       return Object.assign({}, initialState, {
//         currently: constants.LOGGED_IN,
//         displayName: action.displayName,
//         uid: action.uid,
//         email: action.email,
//         imageURL: action.imageURL
//       });

//     default:
//         return state;
//   }
// };

// export default authReducer;