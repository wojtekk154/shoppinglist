import { combineReducers } from 'redux';
import {authReducer} from './authReducer';
import {listReducer} from './listReducer';

const appReducers = combineReducers({
    session: authReducer,
    lists: listReducer
});

export default appReducers;