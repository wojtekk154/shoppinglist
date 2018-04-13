import {applyMiddleware, compose, createStore} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import loggerMiddleware from 'redux-logger';

import * as authEpics from '../Epics/AuthEpic';
import appReducers from '../reducers';
import {loadState, saveState} from "./presistState";

const rootEpic = combineEpics(
    authEpics.signInEpic,
    authEpics.signUpEpic
);
const epicMiddleware = createEpicMiddleware(rootEpic);
const enhancer = compose(
    applyMiddleware(loggerMiddleware, epicMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const store = createStore(appReducers, (loadState() || {}), enhancer);

store.subscribe(() => saveState({
    session: store.getState().session
}));