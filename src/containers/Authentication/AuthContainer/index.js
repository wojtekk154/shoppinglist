import React from 'react';
import {connect} from "react-redux";
import {Route} from "react-router-dom";

import {withRouter} from 'react-router-dom';

import SignIn from '../SignIn';
import SignUp from '../SignUp';

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

    componentDidUpdate() {
        console.log(this.isLoggedIn());
        this.isLoggedIn() && this.props.history.push("/", null);
    }

    render() {
        return (
            <div className="auth-form">
                <Route exact path="/auth/signin" component={SignIn} />
                <Route path="/auth/signup" component={SignUp} />
            </div>
        );
    }
}

function mapStateToProps(state, local) {
    return {...state, ...local};
}

function mapDispatchToProps(dispatch) {
    return dispatch => {
        dispatch
    }
}

AuthContainer.propTypes = {};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthContainer));