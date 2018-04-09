import {applyMiddleware, compose, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {combineEpics} from 'redux-observable';
import * as authEpics from '../Epics/AuthEpic';
import appReducers from '../reducers';


const rootEpic = combineEpics(authEpics.signInEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);

export const configureStore = (initial_state) => {
    const enhancer = compose(applyMiddleware(loggerMiddleware, epicMiddleware));

    return createStore(appReducers, initial_state, enhancer);
};
