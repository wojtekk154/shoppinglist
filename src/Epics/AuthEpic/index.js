import 'rxjs/add/operator/map';
import * as types from '../../constants/actions-list';
import * as endpoints from '../../constants/endpoints';
import * as authActions from '../../actions/Auth';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import axios from 'axios';
import {Observable} from "rxjs/Observable";

export const signInEpic = action$ => {
    return action$.ofType(types.SIGN_IN_USER_ACTION)
        .mergeMap(action => axios.post(endpoints.SIGNIN_URL, {
            email: action.payload.email,
            password: action.payload.password
        }, {'Content-Type': 'application/json'}))
        .catch(err =>  Observable.of(authActions.signInFailureAction(err)))
        .map(resp => authActions.signInSuccessAction(resp.data));
};

