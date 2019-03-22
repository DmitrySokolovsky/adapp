import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { AuthService } from '../../services';

import './login.css';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.oAuthService = new AuthService();

        this.state = {
            name: '',
            password: ''
        };
    }

    componentDidMount() {
        console.log(this.props);
    }

    onPasswordChange = (oEvent) => {
        this.setState({
            password: oEvent.target.value
        });
    }

    onNameChange = (oEvent) => {
        this.setState({
            name: oEvent.target.value
        });
    }

    onLoginPress = () => {
        this.oAuthService.getToken(this.state.name, this.state.password)
            .then(res => this.props.history.push('/')).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="login">
                <h3>Please login</h3>
                <TextField 
                    label="Name"
                    onChange={this.onNameChange}
                />
                <TextField
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={this.onPasswordChange}
                />
                <Button variant="outlined" onClick={this.onLoginPress}>Login</Button>
            </div>
        );
    } 
}