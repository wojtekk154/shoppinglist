import * as types from '../constants/actions-list';

const INIT_STATE = {
    accessToken: '',
    username: '',
    email: '',
    id: ''
};

function authReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case types.SIGN_IN_USER_SUCCESS_ACTION:
            console.log(action.payload);
            return {
                email: action.payload.email,
                accessToken: action.payload.access_token,
                username: action.payload.username,
                id: action.payload.id
            };
        case types.SIGN_OUT_SUCCESS_ACTION:
            return INIT_STATE;
        case types.SIGN_OUT_FAILURE_ACTION:
        case types.SIGN_UP_USER_SUCCESS_ACTION:
        case types.SIGN_UP_USER_FAILURE_ACTION:
        case types.SIGN_IN_USER_FAILURE_ACTION:
            return state;
        default:
            return state;
    }
}

export {authReducer};