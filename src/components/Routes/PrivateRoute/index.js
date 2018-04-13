import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => (
    <React.Fragment>
        {/*<Route {...rest} render={() => (auth ? <Component /> : <Redirect to="/auth/signin"/>)} />*/}
    </React.Fragment>
);

PrivateRoute.propTypes = {
    auth: PropTypes.bool.isRequired,
    exact: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    Component: PropTypes.any.isRequired
};

PrivateRoute.defaultProps = {
    exact: false
};

export {PrivateRoute}