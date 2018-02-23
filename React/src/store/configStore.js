import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reduces from '../reducers';
import {localstoreMiddleware} from '../middlewares';

export const store = createStore(
	combineReducers(reduces),
	composeWithDevTools(),
	applyMiddleware(
		thunk,
		localstoreMiddleware
	)
);
 