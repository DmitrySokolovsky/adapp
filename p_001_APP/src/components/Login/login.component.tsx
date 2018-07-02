import * as React from 'react';
import { inject as inversifyInject, INavigationService } from '../../services';
import { inject } from 'mobx-react'; 
import { LOGIN_CUSTOMER_STORE } from '../../constants';
import { LoginStore } from '../../stores';

import './login.styles.scss';
import { ButtonShared } from '../../common/shared-components/sh-button/button.shared';
import { ILoginState, ILoginProps } from './login.interface';
import { TextField } from 'material-ui';

@inject(LOGIN_CUSTOMER_STORE)
export class Login extends React.Component<ILoginProps, ILoginState> {
    private loginStore: LoginStore = this.props[LOGIN_CUSTOMER_STORE];

    constructor(props: ILoginProps) {
        super(props);
        this.state = {
            loading: false
        };
    }

    @inversifyInject(INavigationService) public navigationService: INavigationService;

    handleEmailChange(e: React.SyntheticEvent<HTMLInputElement>): void {
        this.loginStore.setCustomerLogInName(e.currentTarget.value);
    }

    handlePasswordChange(e: React.SyntheticEvent<HTMLInputElement>): void {
        this.loginStore.setCustomerLogInPassword(e.currentTarget.value);
    }

    handleSubmit(name: string, value: string) {
        this.setState({
            loading: true
        });
        this.loginStore.login().then(() => this.navigationService.navigateTo(value));
    }

    componentDidMount() {
        this.setState({
            loading: false
        });
    }
    
    public render(): JSX.Element {
        if (this.state.loading) {
            return (
                <h1>...LOADING</h1>
            );
        }

        return (
            <div className="login-form__container">
                <div className="login-form">
                    <div className="login-input__container">
                        <TextField 
                            type="text" 
                            label="Name"
                            id="name" 
                            className="login-input"
                            onChange={this.handleEmailChange.bind(this)}/>
                    </div>
                    <div className="login-input__container">
                        <TextField 
                            type="password" 
                            label="Password"
                            id="password" 
                            className="login-input" 
                            onChange={this.handlePasswordChange.bind(this)}/>
                    </div>
                    <ButtonShared 
                        classes="login-button"
                        label="Login"
                        onClick={this.handleSubmit.bind(this)}
                        value="/main"/>
                    <ButtonShared 
                        classes="login-control login-button" 
                        label="Register"
                        onClick={this.handleSubmit.bind(this)}/>
                </div>
            </div>
        );
    }
}
