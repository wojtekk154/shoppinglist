import * as types from '../../../constants/actions-list';

export function createListAction(payload) {
    return {
        type: types.CREATE_NEW_LIST_ACTION,
        payload
    };
}

export function createListSuccessAction(payload) {
    return {
      type: types.CREATE_NEW_LIST_SUCCESS_ACTION,
        payload
    };
}

export function createListFailureAction(payload) {
    return {
        type: types.CREATE_NEW_LIST_FAILURE_ACTION,
        payload
    };
}