import * as React from 'react';
import { inject as inversifyInject, INavigationService } from '../../services';
import { inject } from 'mobx-react'; 
import { LOGIN_CUSTOMER_STORE } from '../../constants';
import { LoginStore } from '../../stores';

import './login.styles.scss';
import { ButtonShared } from '../../common/shared-components/sh-button/button.shared';

@inject(LOGIN_CUSTOMER_STORE)
export class Login extends React.Component {
    private loginStore: LoginStore = this.props[LOGIN_CUSTOMER_STORE];

    @inversifyInject(INavigationService) public navigationService: INavigationService;

    handleEmailChange(e: React.SyntheticEvent<HTMLInputElement>): void {
        this.loginStore.setCustomerLogInEmail(e.currentTarget.value);
    }

    handlePasswordChange(e: React.SyntheticEvent<HTMLInputElement>): void {
        this.loginStore.setCustomerLogInPassword(e.currentTarget.value);
    }

    handleSubmit(name: string, value: string) {
        this.loginStore.login().then(() => this.navigationService.navigateTo(value));
    }

    
    public render(): JSX.Element {
        return (
            <div className="login-form__container">
                <div className="login-form">
                    <div className="login-input__container">
                        <label htmlFor="email" className="login-control login-label">Email</label>
                        <input type="text" className="login-control login-input" id="email" onChange={this.handleEmailChange.bind(this)}/>
                    </div>
                    <div className="login-input__container">
                        <label htmlFor="password" className="login-control login-label">Password</label>
                        <input type="text" className="login-control login-input" id="password"  onChange={this.handlePasswordChange.bind(this)}/>
                    </div>
                    <ButtonShared 
                        label="Login"
                        onClick={this.handleSubmit.bind(this)}
                        value="/main"/>
                    <button className="login-control login-button" onClick={this.handleSubmit.bind(this)}>Register</button>
                </div>
            </div>
        );
    }
}
