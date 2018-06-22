import * as React from 'react';
//import { inject as inversifyInject } from '../../services';
import { inject, observer } from 'mobx-react'; 
import { LOGIN_CUSTOMER_STORE } from '../../constants';
import { LoginStore } from '../../stores';

import './login.styles.scss';

@inject(LOGIN_CUSTOMER_STORE)
@observer
export class Login extends React.Component<{}, {}> {
    private loginStore: LoginStore = this.props[LOGIN_CUSTOMER_STORE];
    constructor(props: {}) {
        super(props);
    }

    handleEmailChange(e: React.SyntheticEvent<HTMLInputElement>): void {
        this.loginStore.setCustomerLogInEmail(e.currentTarget.value);
    }

    handlePasswordChange(e: React.SyntheticEvent<HTMLInputElement>): void {
        this.loginStore.setCustomerLogInPassword(e.currentTarget.value);
    }

    handleSubmit() {
        this.loginStore.login();
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
                    <button className="login-control login-button" onClick={this.handleSubmit.bind(this)}>Login</button>
                    <button className="login-control login-button" onClick={this.handleSubmit.bind(this)}>Register</button>
                </div>
            </div>
        );
    }
}
