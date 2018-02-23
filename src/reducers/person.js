import {cloneDeep, map} from 'lodash';
const initial = {
	byIndex: [],
	byError: null
}

const getUser = (state, {payload}) => {
	let newState = cloneDeep(state);
	newState.byIndex = map(payload, (item, index) => ({...item, index}));
	return newState;
};

export const person = (state = initial, action) => {
	switch(action.type) {
		case 'GET_SUCCESS_USERS': 
			return getUser(state, action);
		case 'GET_ERROR_USER': 
		return {...state, byError: action.payload}
		default:
			return initial;
	}
}