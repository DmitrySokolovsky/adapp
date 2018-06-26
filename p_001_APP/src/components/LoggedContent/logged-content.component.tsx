import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { LOGIN_CUSTOMER_STORE } from '../../constants';
import { LoginStore } from '../../stores';
import { inject as inversifyInject } from '../../services';
import { INavigationService } from '../../services';

@inject(LOGIN_CUSTOMER_STORE)
@observer
export class LoggedContent extends React.Component<{}, {}> {
    @inversifyInject(INavigationService) public navService: INavigationService;
    private loginStore: LoginStore = this.props[LOGIN_CUSTOMER_STORE];

    constructor(props: {}) {
        super(props);
    }

    componentWillMount(): void {
        const customer = this.loginStore.customerData;

        if (!customer){
            this.runToLogin();
        }
    }

    public render(): React.ReactNode | null {
        if (this.loginStore.customerData){
            return this.props.children as JSX.Element;
        } else {
            return null;
        }
    }

    private runToLogin():void {
        this.navService.navigateTo('#/login');
    }
}
