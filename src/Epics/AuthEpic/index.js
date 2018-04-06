import { ajax } from 'rxjs/observable/dom/ajax';
import * as types from '../../constants/actions-list';
import * as actions from '../../actions/Auth';

export function signInEpic(action$) {
    return action$.ofType(types.SIGN_IN_USER_ACTION)
        .mergeMap(action =>
            ajax.
        )

}