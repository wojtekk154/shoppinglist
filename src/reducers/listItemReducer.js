import * as types from '../constants/actions-list';

const INIT_STATE = {
    list: {},
    collection: []
};

export function listItemReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case types.GET_LIST_COLLECTION_SUCCESS_ACTION:
            return {};

        case types.GET_LIST_COLLECTION_FAILURE_ACTION:
            return state;
        default:
            return state;
    }

}