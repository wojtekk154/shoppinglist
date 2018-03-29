import {applyMiddleware, compose, createStore} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import appReducers from '../reducers/index';

const INITIAL_STATE = {};

const configureStore = (INITIAL_STATE) => {
    const enhancer = compose(applyMiddleware(
        loggerMiddleware,
        thunkMiddleware
    ));

    return createStore(appReducers, INITIAL_STATE, enhancer);
};

export default configureStore;