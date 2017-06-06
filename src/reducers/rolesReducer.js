import {firebaseAuth,firebaseDb,firebaseApp} from '../core/firebase';

import * as constants from '../constants';

const rolesReducer = (state = {}, action) => {
  switch (action.type) {
    // case constants.INCREASE_WIDGET_VALUE:
    //   return state.map(widget => widgetReducer(widget, action));

    // case constants.DECREASE_WIDGET_VALUE:
    //   return state.map(widget => widgetReducer(widget, action));

    case constants.RECEIVE_ROLELIST_DATA:
      return Object.assign({}, action.data);

    default:
        return state;
  }
};

export default rolesReducer;
