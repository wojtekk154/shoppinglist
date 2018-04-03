import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './style.css';

class UserRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
            username: ''
        };

        this.authenticationService = {};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.state);
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
                            hintText="User Name"
                            floatingLabelText="User Name"
                            type="text"
                            name="username"
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
                        <TextField
                            hintText="Password Confirmation"
                            floatingLabelText="Password Confirmation"
                            type="password"
                            name="password_confirmation"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="inputField">
                        <RaisedButton label="Sign Up" primary={true} type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

UserRegister.propTypes = {};

export default UserRegister;