import * as React from 'react';
import { Provider } from 'mobx-react';

import {
    LoginStore
} from '../../stores';

import './root.styles.scss';

import {
    LOGIN_CUSTOMER_STORE
} from '../../constants';

import { ShComponentsProvider } from '../../common/shared-components/shared-components-provider/sh-component-provider.component';
import { inject } from '../../services';
import { HashRouter } from 'react-router-dom';
import { HomePage } from '../../view';
import { INavigationService } from '../../services';

const loginStore: LoginStore = new LoginStore();

const rootStore = {
    [LOGIN_CUSTOMER_STORE]: loginStore
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
                    <HashRouter>
                        <HomePage />
                    </HashRouter>
                </ShComponentsProvider>
            </Provider>
        );
    }
}
