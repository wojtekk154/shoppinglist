import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as types from '../../constants/actions-list';
import * as endpoints from '../../constants/endpoints';
import * as actions from '../../actions/List';
import {Observable} from 'rxjs/Observable';

export const LoadListEpic = (action$, store) => {
    return action$.ofType(types.GET_POSITIONS_FROM_LIST_ACTION)
        .mergeMap(action => {
            const currentList = store.getState().lists.filter(v => v._id === action.payload.list).get(0);
             return ajax.get(endpoints.GET_LIST_ITEMS_URL(action.payload.list), {
                'Content-Type': 'application/json',
                'access-token': store.getState().session.accessToken,
                'userId': store.getState().session.id
            })
                .map(v => actions.getListCollectionSuccessAction({list: currentList, collection: v.response}))
                .catch(e => Observable.of(actions.getListCollectionFailureAction(e)));
        });
}