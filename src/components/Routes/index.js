import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../../containers/Home';
import NewList from '../../containers/NewList';

export function Routes() {
    return (
        <main>
            <Switch>
                {/*<Route  path="/register" component={UserRegister} />*/}
                {/*<Route path="/signin" component={UserLogin} />*/}
                <Route exact path="/" component={Home}/>
                <Route path="/list/new" component={NewList}/>
            </Switch>
        </main>
    );
}