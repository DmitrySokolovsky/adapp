import * as React from 'react';
import { inject as injectStore, observer } from 'mobx-react';
import { LOGIN_CUSTOMER_STORE } from '../../constants';
import { LoginStore } from '../../stores';
import { MainPage } from '../MainPage/main-page.component';
import { EntryPage } from '..';

@injectStore(LOGIN_CUSTOMER_STORE)
@observer
export class OrderPage extends React.Component<{}, {}> {
    private loginStore: LoginStore = this.props[LOGIN_CUSTOMER_STORE];

    componentDidMount() {
        this.loginStore.setCustomerData();
    }

    public render(): JSX.Element {

        return (
            <div>
                    {
                        this.loginStore.customerData ? 
                        <MainPage /> :
                        <EntryPage />
                    }                
            </div>
        );
    }
}