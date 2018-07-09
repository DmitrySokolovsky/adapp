import * as React from 'react';
import { AppBar } from 'material-ui';
import './header.style.scss';
import { inject, observer } from 'mobx-react';
import { inject as inversifyInject, INavigationService } from '../../services';
import { LOGIN_CUSTOMER_STORE, BASE_API_URL } from '../../constants';
import { LoginStore } from '../../stores';
import { ButtonShared } from '../../common/shared-components/sh-button/button.shared';
import axios from 'axios';

@inject(LOGIN_CUSTOMER_STORE)
@observer
export class Header extends React.Component {

    private loginStore: LoginStore = this.props[LOGIN_CUSTOMER_STORE];
    @inversifyInject(INavigationService) public navigationService: INavigationService;

    public menuBtnClick(name: string, value: string): void {
        console.log(value);
        this.navigationService.navigateTo(value);
    }

    public logOut(name: string, value: string): void {
        this.loginStore.customerData = null;
        localStorage.clear();
        this.navigationService.navigateTo(value);
    }

    public render(): JSX.Element {
        return (
            <AppBar position="static" color="default" className="header">
                {
                    this.loginStore.customerData ?
                    <ul className="navigation__main">
                        <li className="navigation-item">
                            <ButtonShared
                                label="Food list"
                                value="/product_list"
                                onClick={this.menuBtnClick.bind(this)} />
                        </li>
                    </ul> :
                    null
                }
                <ul className="navigation__login">
                    <li className="navigation-item">
                        {
                            !this.loginStore.customerData ?
                                <ButtonShared
                                    label="Login"
                                    value="/login"
                                    onClick={this.menuBtnClick.bind(this)} /> :
                                <ButtonShared
                                    label="Logout"
                                    value="/"
                                    onClick={this.logOut.bind(this)} />
                        }

                    </li>

                </ul>

            </AppBar>
        );
    }
}