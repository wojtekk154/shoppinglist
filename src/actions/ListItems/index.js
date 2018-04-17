import * as types from '../../constants/actions-list';

export function getListItemsAction(payload) {
    return {
        type: types.GET_POSITIONS_FROM_LIST_ACTION,
        payload
    };
}

export function getListItemsSuccessAction(payload) {
    return {
        type: types.GET_POSITIONS_FROM_LIST_SUCCESS_ACTION,
        payload
    };
}

export function getListItemsFailureAction(payload) {
    return {
        type: types.GET_POSITIONS_FROM_LIST_FAILURE_ACTION,
        payload
    };
}

export function addListItemAction(payload) {
    return {
        type: types.ADD_NEW_POSITION_TO_LIST_ACTION,
        payload
    };
}

export function addListItemSuccessAction(payload) {
    return {
        type: types.ADD_NEW_POSITION_TO_LIST_SUCCESS_ACTION,
        payload
    };
}

export function addListItemFailureAction(payload) {
    return {
        type: types.ADD_NEW_POSITION_TO_LIST_FAILURE_ACTION,
        payload
    };
}
