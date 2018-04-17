import * as types from '../../constants/actions-list';

export function addNewListAction(payload) {
    return {
        type: types.CREATE_NEW_LIST_ACTION,
        payload
    };
}

export function addNewListSuccessAction(payload) {
    return {
        type: types.CREATE_NEW_LIST_SUCCESS_ACTION,
        payload
    };
}

export function addNewListFailureAction(payload) {
    return {
        type: types.CREATE_NEW_LIST_FAILURE_ACTION,
        payload
    };
}

export function getCurrentListAction(payload) {
    return {
        type: types.GET_CURRENT_LIST_ACTION,
        payload
    };
}


export function getCurrentListSuccessAction(payload) {
    return {
        type: types.GET_CURRENT_LIST_SUCCESS_ACTION,
        payload
    };
}


export function getCurrentListFailureAction(payload) {
    return {
        type: types.GET_CURRENT_LIST_FAILURE_ACTION,
        payload
    };
}

export function getListCollectionAction() {
    return {
        type: types.GET_LIST_COLLECTION_ACTION,
    };
}

export function getListCollectionSuccessAction(payload) {
    return {
        type: types.GET_LIST_COLLECTION_SUCCESS_ACTION,
        payload
    };
}

export function getListCollectionFailureAction(payload) {
    return {
        type: types.GET_LIST_COLLECTION_FAILURE_ACTION,
        payload
    };
}

export function removeListAction(payload) {
    return {
        type: types.DELETE_LIST_ACTION,
        payload
    };
}

export function removeListSuccessAction(payload) {
    return {
        type: types.DELETE_LIST_SUCCESS_ACTION,
        payload
    };
}

export function removeListFailureAction(payload) {
    return {
        type: types.DELETE_LIST_FAILURE_ACTION,
        payload
    };
}