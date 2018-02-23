import {get, saveOne, deleteOne} from '../utils';

export const synchronizeUserWithLocalStore = () => {
    return async dispatch => {
        function onSuccess(success) {
            dispatch({
                type: 'SYNCHRONIZE_SUCCESS_USER',
                payload: success
            });
            return success;
        }
        function onError(error) {
            dispatch({
                type: 'GET_ERROR_USER',
                error
            });
            return error;
        }
        try {
            const url = `https://private-21e8de-rafaellucio.apiary-mock.com/users`;
            const response = await fetch(url);
            const data = await response.json();
            return onSuccess(data);
        } catch(e) {
            return onError(e);
        }
    }
}

export const getUsers = () => {
    const payload = get('user', true);
    return dispatch => {
        dispatch({
            type: 'GET_SUCCESS_USERS',
            payload: payload    
        });
    }
}

export const saveUser = (user) => {
    const payload = saveOne('user', user);
    return dispatch => {
        dispatch({
            type: 'SAVE_SUCCESS_USER',
            payload
        })
    }
}
export const deleteUser = (index) => {
    const payload = deleteOne('user', index);
    return dispatch => {
        dispatch({
            type: "GET_SUCCESS_USERS",
            payload
        });    
    }
}