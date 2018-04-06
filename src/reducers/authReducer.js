import * as types from '../constants/actions-list';

const INIT_STATE = {
    accessToken: '',
    username: '',
    email: '',
    id: ''
};

export function authReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case types.SIGN_IN_USER_SUCCESS_ACTION:
            return {...action.payload};
        case types.SIGN_UP_USER_SUCCESS_ACTION:
        case types.SIGN_UP_USER_FAILURE_ACTION:
        case types.SIGN_IN_USER_FAILURE_ACTION:
            return state;
        default:
            return state;


    }
}