import * as types from '../../constants/actions-list';

export function addNewsProductAction(payload) {
    return {
        type: types.ADD_NEW_POSITION_TO_LIST_ACTION,
        payload
    };
}

export function addNewsProductSuccessAction(payload) {
    return {
        type: types.ADD_NEW_POSITION_TO_LIST_SUCCESS_ACTION,
        payload
    };
}

export function addNewsProductFailureAction(payload) {
    return {
        type: types.ADD_NEW_POSITION_TO_LIST_FAILURE_ACTION,
        payload
    };
}