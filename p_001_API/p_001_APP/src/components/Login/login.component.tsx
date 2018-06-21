import * as React from 'react';
//import { inject as inversifyInject } from '../../services';
import { inject, observer } from 'mobx-react'; 
import { LOGIN_CUSTOMER_STORE } from '../../constants';
import { LoginStore } from '../../stores';

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
            <div>
                <label htmlFor="email"></label>
                <input type="text" id="email" onChange={this.handleEmailChange.bind(this)}/>
                <label htmlFor="password"></label>
                <input type="text" id="password"  onChange={this.handlePasswordChange.bind(this)}/>
                <button onClick={this.handleSubmit.bind(this)}>Login</button>
            </div>
        );
    }
}
