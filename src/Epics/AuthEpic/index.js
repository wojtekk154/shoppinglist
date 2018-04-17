import * as types from '../../constants/actions-list';
import * as authActions from '../../actions/Auth';
import * as endpoints from '../../constants/endpoints';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {ajax} from 'rxjs/observable/dom/ajax';
import {Observable} from "rxjs/Observable";

export const signInEpic = action$ => {
    return action$.ofType(types.SIGN_IN_USER_ACTION)
        .mergeMap(action => ajax.post(endpoints.SIGNIN_URL, {email: action.payload.email, password: action.payload.password })
            .map(resp => authActions.signInSuccessAction(resp.response))
            .catch(err => Observable.of(authActions.signInFailureAction(err)))
        );
};

export const signUpEpic = action$ => {
    return action$.ofType(types.SIGN_UP_USER_ACTION)
        .mergeMap(action => ajax.post(endpoints.SIGNUP_URL, {
                email: action.payload.email,
                username: action.payload.username,
                password: action.payload.password
            }, {'Content-Type': 'application/json'})
                .map(v => authActions.signUpSuccessAction(v.response))
                .catch(err => Observable.of(authActions.signUpFailureAction(err)))
        );
};

