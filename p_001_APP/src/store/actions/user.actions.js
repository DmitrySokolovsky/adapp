import { UserService } from '../../services';
import { GET_USER_SUCCESS, GET_USER_ERROR } from './user.action-types';

const oUserService = new UserService();

export function getCurrentUser() {
    return (dispatch) => {
        oUserService.getCurrentUser()
        .then(result => dispatch(setUserSuccess(result)))
        .catch(err => dispatch(setUserError()));
    }
}

function setUserSuccess(user) {
    return {
        type: GET_USER_SUCCESS,
        payload: user
    }
}

function setUserError() {
    return {
        type: GET_USER_ERROR,
    }
}