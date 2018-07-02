import * as React from "react";
//import { Paper } from "material-ui";
// import { LoggedContent } from "../../components";
import { inject as injectStore, observer } from 'mobx-react';
import { LOGIN_CUSTOMER_STORE } from "../../constants";
import { LoginStore } from "../../stores";

@injectStore(LOGIN_CUSTOMER_STORE)
@observer
export class MainPage extends React.Component<{}, {}> {
    private loginStore: LoginStore = this.props[LOGIN_CUSTOMER_STORE];

    constructor(props: {}) {
        super(props);
    }

    componentDidMount() {
        this.loginStore.setCustomerData();
    }

    public render(): JSX.Element {
        const userName = this.loginStore.customerData ? this.loginStore.customerData.name : 'none';
        if (!this.loginStore.customerData) {
            return (
                <h1>...LOADING</h1>
            );
        }

        return (
            <h1>Hello {userName}</h1>
        );
    }
}