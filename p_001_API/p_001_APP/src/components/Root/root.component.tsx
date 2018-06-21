import * as React from 'react';
import { Provider } from 'mobx-react';

import { IRootState } from './root.interface';
import { Login } from '..';

import {
    LoginStore
} from '../../stores';

import {
    LOGIN_CUSTOMER_STORE
} from '../../constants';

const loginStore: LoginStore = new LoginStore();

const rootStore = {
    [LOGIN_CUSTOMER_STORE]: loginStore
};

export class Root extends React.Component<{}, IRootState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            user: null
        };
    }

    public render(): JSX.Element {
        return (
            <Provider {...rootStore}>
               <Login/> 
            </Provider>
        );
    }
}
