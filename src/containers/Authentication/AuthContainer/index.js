import React from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";

import SignIn from '../SignIn';
import SignUp from '../SignUp';

import './index.css';

class AuthContainer extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    render(){
        return (
            <div className="auth-form">

                <Route path="/auth/signin" component={SignIn} />
                <Route path="/auth/signup" component={SignUp} />
                {this.props.session.accessToken !== '' && <Redirect to="/" />}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return dispatch => {
        dispatch
    }
}

AuthContainer.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);