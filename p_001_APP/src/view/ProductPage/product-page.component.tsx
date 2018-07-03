import * as React from 'react';
// // import { inject as injectStore, observer } from 'mobx-react';
// // import { LOGIN_CUSTOMER_STORE, PRODUCT_STORE } from "../../constants";
// import { LoginStore } from "../../stores";
import { ProductList } from "../../components/ProductList/product-list.component";

export class ProductPage extends React.Component {

    public render(): JSX.Element {
        return (
            <ProductList/>
        );
    }
}