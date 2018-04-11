import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest}) => (
    <React.Fragment>
        <Route {...rest} render={() => (!auth ? <Component/> : <Redirect to="/"/>)} />
    </React.Fragment>
);

PublicRoute.propTypes = {
    auth: PropTypes.bool.isRequired,
    exact: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    Component: PropTypes.any.isRequired
};
PublicRoute.defaultProps = {
    exact: false
};
export {PublicRoute}