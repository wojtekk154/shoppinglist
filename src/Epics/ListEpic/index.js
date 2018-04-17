import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as types from '../../constants/actions-list';
import * as endpoints from '../../constants/endpoints';
import * as actions from '../../actions/List';
import {Observable} from 'rxjs/Observable';

export const getListCollectionEpic = (action$, store) => {
    return action$.ofType(types.GET_LIST_COLLECTION_ACTION)
        .mergeMap(action => ajax.get(endpoints.GET_USER_LISTS_URL,
            {
                'Content-Type': 'application/json',
                'access-token': store.getState().session.accessToken,
                'userId': store.getState().session.id
            })
            .map(v => actions.getListCollectionSuccessAction(v.response))
            .catch(e => Observable.of(actions.getListCollectionFailureAction(e)))
        );
};

export const createNewListEpic = (action$, store) => {
    return action$.ofType(types.CREATE_NEW_LIST_ACTION)
        .mergeMap(action => ajax.post(endpoints.ADD_LIST_URL, {
                name: action.payload.name,
                user: store.getState().session.id
            }, {
                'Content-Type': 'application/json',
                'access-token': store.getState().session.accessToken,
                'userId': store.getState().session.id
            })
                .map(v => actions.addNewListSuccessAction(v.response))
                .catch(e => Observable.of(actions.addNewListFailureAction(e)))
        );
};

export const removeListEpic = (action$, store) => {
    return action$.ofType(types.DELETE_LIST_ACTION)
        .mergeMap(action => ajax.delete(endpoints.REMOVE_LIST_URL(action.payload.id), {
                'Content-Type': 'application/json',
                'access-token': store.getState().session.accessToken
            })
                .map(v => actions.removeListSuccessAction({message: v.response, id: action.payload.id}))
                .catch(v => Observable.of(actions.removeListFailureAction(v)))
        );
}