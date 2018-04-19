import * as types from '../constants/actions-list';
import {List} from 'immutable';

const INIT_STATE = {
    list: {},
    collection: List([])
};

export function listItemReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case types.GET_LIST_COLLECTION_SUCCESS_ACTION:
            return {};
        case types.GET_POSITIONS_FROM_LIST_SUCCESS_ACTION:
            return {
                list: action.payload.list,
                collection: List(action.payload.collection)
            };
        case types.GET_LIST_COLLECTION_FAILURE_ACTION:
            return state;
        default:
            return state;
    }

}