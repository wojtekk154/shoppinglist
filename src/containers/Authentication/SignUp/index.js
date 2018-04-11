import React from 'react';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {bindActionCreators} from "redux";

import * as actions from '../../../actions/Auth';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.signUpAction(this.state);
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                <form noValidate onSubmit={this.handleSubmit} className="signup-form">
                    <h2>Sign Up!</h2>
                    <div className="input-field">
                        <TextField
                            hintText="Username"
                            name="username"
                            type="text"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="input-field">
                        <TextField
                            hintText="E-mail"
                            name="email"
                            type="email"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="input-field">
                        <TextField
                            hintText="Password"
                            name="password"
                            type="password"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="input-field">
                        <TextField
                            hintText="Password Confirmation"
                            name="password_confirmation"
                            type="password"
                            onChange={this.handleInput}
                        />
                    </div>
                    <RaisedButton
                        type="submit"
                        label="Sign Up"
                        primary={true}
                        fullWidth={true}
                    />
                </form>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

SignUp.propTypes = {};
const SignUpComponent = connect(mapStateToProps, mapDispatchToProps)(SignUp);
export {SignUpComponent}
