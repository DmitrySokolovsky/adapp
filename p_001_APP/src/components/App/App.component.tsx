import * as React from 'react';
import { IAppProps, IAppState } from './App.interface';
import { HomePage } from '../../view';
import { Login } from '..';
import { inject, observer } from 'mobx-react';
import { LOGIN_CUSTOMER_STORE } from '../../constants';
import { LoginStore } from '../../stores';

@inject(LOGIN_CUSTOMER_STORE)
@observer
export class App extends React.Component<IAppProps, IAppState> {
    private loginStore: LoginStore = this.props[LOGIN_CUSTOMER_STORE];
    
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            customer: null
        } as IAppState;
    }

    componentWillMount() {
        console.log(this.loginStore.customerData);
    }

    public render(): JSX.Element {
        return (
            <div>
                {
                !this.loginStore.customerData ?
                    <Login/>:
                    <HomePage/>
                }
            </div>
            
        );
    }
}