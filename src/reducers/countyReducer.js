import * as constants from '../constants';
import initialState from '../utils/initialState';

const initialCountyState={
	showAddDialog:false,
	data:[]
};

export default function(state =initialCountyState, action) {
  switch(action.type) {
    case 'SHOW_ADD_DIALOG':
      return { ...state, 
        showAddDialog: true 
      };
    case 'HIDE_ADD_DIALOG':
      return { ...state, 
        showAddDialog: false 
      };
    case 'FETCH_COUNTY':
    	return{...state,
    		data:action.data
    	}
  }

  return state;
}
