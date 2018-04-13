import React from 'react';
import {connect} from "react-redux";

import * as actions from '../../../actions';
import {SignInComponent, SignUpComponent} from '../';

import {bindActionCreators} from "redux";
import {Redirect, Route} from "react-router-dom";

import './index.css';

class AuthContainer extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.isLoggedIn = this.isLoggedIn.bind(this);
    }

    isLoggedIn() {
        return this.props.session.accessToken !== '';
    }

    render() {
        if (this.isLoggedIn()) {
            return (
                <React.Fragment>
                    <Redirect to="/user-list"/>
                </React.Fragment>
            );
        }
        return (
            <div className="auth-form">
                <Route path={`${this.props.match.url}/signin`} component={SignInComponent}/>
                <Route path={`${this.props.match.url}/signup`} component={SignUpComponent}/>
            </div>
        );
    }
}

function mapStateToProps(state, local) {
    return {...state, ...local};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

AuthContainer.propTypes = {};
const AuthContainerComponent = connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
export {AuthContainerComponent}