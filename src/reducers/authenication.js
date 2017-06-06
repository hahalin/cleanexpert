import {
	CHANGE_AUTH
} from '../actions/types';

const initialState={
	isLoggin:false,
	userName:''
}

export default function (state=initialState,action){
	switch(action.type)
	{
		case CHANGE_AUTH:
			return assign({},state,
				{
					isLoggin:action.payload,
					userName:''
				}
			);
	}

	return state;
}