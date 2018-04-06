import { combineReducers } from 'redux';
import {authReducer} from './authReducer';

const appReducers = combineReducers({
    session: authReducer
});

export default appReducers;