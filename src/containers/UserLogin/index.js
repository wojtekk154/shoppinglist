import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import AuthService from '../../services/authService';

import './style.css';

class UserLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.authenticationService = new AuthService();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.authenticationService.signIn(this.state)
            .then(data => console.log(data))
            .catch(e => console.log(e))
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="register-form-container">
                <form onSubmit={this.handleSubmit} className="register-form">
                    <div className="inputField">
                        <TextField
                            hintText="E-mail"
                            floatingLabelText="E-mail"
                            type="email"
                            name="email"
                            onChange={this.handleInput}
                        />
                    </div>

                    <div className="inputField">
                        <TextField
                            hintText="Password"
                            floatingLabelText="Password"
                            type="password"
                            name="password"
                            onChange={this.handleInput}
                        />
                    </div>

                    <div className="inputField">
                        <RaisedButton label="Sign Up" primary={true} type="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

UserLogin.propTypes = {};

export default UserLogin;