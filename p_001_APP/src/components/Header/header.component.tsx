import * as React from 'react';
import { AppBar } from 'material-ui';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { inject } from 'mobx-react';
import { inject as inversifyInject, INavigationService } from '../../services';
import { LOGIN_CUSTOMER_STORE } from '../../constants';
import { LoginStore } from '../../stores';
import { ButtonShared } from '../../common/shared-components/sh-button/button.shared';

@inject(LOGIN_CUSTOMER_STORE)
export class Header extends React.Component {

    private loginStore: LoginStore = this.props[LOGIN_CUSTOMER_STORE];
    @inversifyInject(INavigationService) public navigationService: INavigationService;

    public menuBtnClick(name: string, value: string): void {
        console.log(value);
        this.navigationService.navigateTo(value);
    }

    public render(): JSX.Element {
        return (
            <AppBar>
                <ul className="navigation">
                    <li className="navigation-item">
                    {
                        this.loginStore.customerData ?
                        <Link to="/main">
                            <ButtonShared
                                label="MAIN PAGE"
                                value="/main"
                                onClick={this.menuBtnClick.bind(this)}/>
                        </Link> :
                        null
                    }                        
                    </li>
                    <li className="navigation-item">                        
                            <ButtonShared
                                label="Login"
                                value="/login"
                                onClick={this.menuBtnClick.bind(this)}/>                        
                    </li>

                </ul>

            </AppBar>
        );
    }
}