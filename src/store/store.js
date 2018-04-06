import {applyMiddleware, compose, createStore} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import appReducers from '../reducers/index';

const epicMiddleware = createEpicMiddleware(rootEpic);

export const configureStore = (initial_state) => {
    const enhancer = compose(applyMiddleware(
        loggerMiddleware,
        thunkMiddleware
    ));

    return createStore(appReducers, initial_state, enhancer);
};
