import * as types from '../constants/actions-list';
import {List} from 'immutable';

const INIT_STATE = [];

export function listReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case types.GET_LIST_COLLECTION_SUCCESS_ACTION:
            return List(Object.values(action.payload));
        case types.CREATE_NEW_LIST_SUCCESS_ACTION:
            return state.set(state.size, action.payload);
        case types.DELETE_LIST_SUCCESS_ACTION:
            return state.filter(v => v._id !== action.payload.id);
        case types.CREATE_NEW_LIST_FAILURE_ACTION:
        case types.DELETE_LIST_FAILURE_ACTION:
        case types.GET_LIST_COLLECTION_FAILURE_ACTION:
            return state;
        default:
            return state;
    }
};