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

export const LoadListEpic = (action$, store) => {
    action$.ofType(types.GET_LIST_COLLECTION_ACTION)
        .mergeMap(action => ajax.get(endpoints.GET_LIST_ITEMS_URL()))
}