import React from 'react';
import {connect} from "react-redux";

import * as actions from '../../../actions';
import {SignInComponent, SignUpComponent} from '../';
import {PublicRoute} from '../../../components/Routes';

import './index.css';
import {bindActionCreators} from "redux";

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
    }

    render() {
        return (
            <div>

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