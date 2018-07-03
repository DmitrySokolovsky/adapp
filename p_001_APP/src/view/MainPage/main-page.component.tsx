import * as React from "react";
//import { Paper } from "material-ui";
// import { LoggedContent } from "../../components";
import { inject as injectStore, observer } from 'mobx-react';
import { LOGIN_CUSTOMER_STORE, PRODUCT_STORE } from "../../constants";
import { LoginStore } from "../../stores";
import './main-page.style.scss';
import { ProductList } from "../../components/ProductList/product-list.component";

@injectStore(LOGIN_CUSTOMER_STORE, PRODUCT_STORE)
@observer
export class MainPage extends React.Component<{}, {}> {
    private loginStore: LoginStore = this.props[LOGIN_CUSTOMER_STORE];
   // private productStore: ProductStore = this.props[PRODUCT_STORE];

    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        const userName = this.loginStore.customerData ? this.loginStore.customerData.name : 'none';
        if (!this.loginStore.customerData) {
            return (
                <div className="preloader"><h1>>>>LOADING</h1></div>
            );
        }

        return (
            <div>
                <h1>THIS IS MAIN PAGE <br /> USER SEE IT IF HE's LOGGED IN <br /> {userName}</h1>
                <ProductList/>
            </div>            
        );
    }
}