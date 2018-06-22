import * as React from 'react';
import { Provider, observer } from 'mobx-react';

import { IRootState } from './root.interface';

import {
    LoginStore
} from '../../stores';

import './root.styles.scss';

import {
    LOGIN_CUSTOMER_STORE
} from '../../constants';
import { App } from '..';

const loginStore: LoginStore = new LoginStore();

const rootStore = {
    [LOGIN_CUSTOMER_STORE]: loginStore
};

@observer
export class Root extends React.Component<{}, IRootState> {
    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Provider {...rootStore}>
               <App/>
            </Provider>
        );
    }
}
