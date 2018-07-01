import * as React from 'react';
import { AppBar } from 'material-ui';
import './header.style.scss';
import { inject, observer } from 'mobx-react';
import { inject as inversifyInject, INavigationService } from '../../services';
import { LOGIN_CUSTOMER_STORE } from '../../constants';
import { LoginStore } from '../../stores';
import { ButtonShared } from '../../common/shared-components/sh-button/button.shared';

@inject(LOGIN_CUSTOMER_STORE)
@observer
export class Header extends React.Component {

    private loginStore: LoginStore = this.props[LOGIN_CUSTOMER_STORE];
    @inversifyInject(INavigationService) public navigationService: INavigationService;

    public menuBtnClick(name: string, value: string): void {
        console.log(value);
        this.navigationService.navigateTo(value);
    }

    public render(): JSX.Element {
        return (
            <AppBar position="static" color="default">
                <ul className="navigation">
                    <li className="navigation-item">
                        {
                            this.loginStore.customerData ?

                                <ButtonShared
                                    label="MAIN PAGE"
                                    value="/main"
                                    classes="navigation__button"
                                    onClick={this.menuBtnClick.bind(this)} />
                                :
                                null
                        }
                    </li>
                    <li className="navigation-item">
                        {
                            !this.loginStore.customerData ?
                                <ButtonShared
                                    label="Login"
                                    value="/login"
                                    onClick={this.menuBtnClick.bind(this)} /> :
                                null
                        }

                    </li>

                </ul>

            </AppBar>
        );
    }
}