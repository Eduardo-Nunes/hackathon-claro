import {check, save} from '../utils';

export const localstoreMiddleware = store => next => action => {
  if(action.type === 'SYNCHRONIZE_SUCCESS_USER') {
    if (!check('user')) {
    	save('user', action.payload);
    }
  }
  return next(action);
};