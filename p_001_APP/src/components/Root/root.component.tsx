import * as React from 'react';
import { Provider } from 'mobx-react';

import {
    LoginStore
} from '../../stores';

import './root.styles.scss';

import {
    LOGIN_CUSTOMER_STORE, PRODUCT_STORE
} from '../../constants';

import { ShComponentsProvider } from '../../common/shared-components/shared-components-provider/sh-component-provider.component';
import { inject } from '../../services';
import { Router } from 'react-router-dom';
import { HomePage } from '../../view';
import { INavigationService } from '../../services';
import { ProductStore } from '../../stores/product-strore/product.store';

const loginStore: LoginStore = new LoginStore();
const productStore: ProductStore = new ProductStore();

const rootStore = {
    [LOGIN_CUSTOMER_STORE]: loginStore,
    [PRODUCT_STORE]: productStore
};

export class Root extends React.Component<{}, {}> {
    @inject(INavigationService) public navigationService: INavigationService;

    componentWillMount() {
        console.log(this.navigationService);
    }

    public render(): JSX.Element {
        return (
            <Provider {...rootStore}>
                <ShComponentsProvider>
                    <Router history={this.navigationService.getHistory()}>
                        <HomePage />
                    </Router>
                </ShComponentsProvider>
            </Provider>
        );
    }
}
