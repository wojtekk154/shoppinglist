import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {ListItemsComponent, SignInComponent, SignUpComponent, UserListComponentContainer} from '../../containers';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={(props) => (rest.session ? <Component  {...props} /> : <Redirect to="/signin"/>)}
    />
);

const PublicRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={(props) => (rest.session ? <Component {...props}/> : <Redirect to="/"/>)}
    />
);

const RoutingComponent = ({session}) => (
    <div className="routing-container">
        <Switch>
            <PublicRoute
                path="/signin"
                session={session.accessToken === ""}
                component={SignInComponent}
            />
            <PublicRoute
                path="/signup"
                session={session.accessToken === ""}
                component={SignUpComponent}
            />
            <PrivateRoute
                path="/"
                exact={true}
                session={session.accessToken !== ""}
                component={UserListComponentContainer}
            />
            <PrivateRoute
                path="/:list"
                session={session.accessToken !== ""}
                component={ListItemsComponent}
            />

            <Route
                render={() => <h2>Not Found!</h2>}
            />
        </Switch>
    </div>
);

export {RoutingComponent}