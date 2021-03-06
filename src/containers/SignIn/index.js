import React from 'react';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../../actions/Auth/index';
import {bindActionCreators} from "redux";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signInAction(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className="signup-form">
                    <h2>Sign In</h2>
                    <div className="input-field">
                        <TextField
                            fullWidth
                            hintText="E-mail"
                            type="email"
                            name="email"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="input-field">
                        <TextField
                            fullWidth
                            hintText="Password"
                            type="password"
                            name="password"
                            onChange={this.handleInput}
                        />
                    </div>
                    <RaisedButton
                        label="Sign in"
                        primary={true}
                        fullWidth={true}
                        type="submit"
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

SignIn.propTypes = {};

const SignInComponent = connect(mapStateToProps, mapDispatchToProps)(SignIn);
export {SignInComponent}
