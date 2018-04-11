import * as types from '../../constants/actions-list';

export function signInAction(payload) {
    return {
        type: types.SIGN_IN_USER_ACTION,
        payload
    };
}

export function signInSuccessAction(payload) {
    return {
        type: types.SIGN_IN_USER_SUCCESS_ACTION,
        payload
    };
}

export function signInFailureAction(payload) {
    return {
        type: types.SIGN_IN_USER_FAILURE_ACTION,
        payload
    };
}

export function signUpAction(payload) {
    return {
        type: types.SIGN_UP_USER_ACTION,
        payload
    };
}

export function signUpSuccessAction(payload) {
    return {
        type: types.SIGN_UP_USER_SUCCESS_ACTION,
        payload
    };
}

export function signUpFailureAction(payload) {
    return {
        type: types.SIGN_UP_USER_FAILURE_ACTION,
        payload
    };
}

export function signOutAction() {
    return {
        type: types.SIGN_OUT_ACTION
    };
}


export function signOutSuccessAction() {
    return {
        type: types.SIGN_OUT_SUCCESS_ACTION
    };
}

export function signOutFailureAction() {
    return {
        type: types.SIGN_OUT_FAILURE_ACTION
    };
}