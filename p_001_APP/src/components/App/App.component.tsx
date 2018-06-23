import * as React from 'react';
import { IAppProps, IAppState } from './App.interface';
// import { Login } from '..';
import { inject, observer } from 'mobx-react';
import { LOGIN_CUSTOMER_STORE } from '../../constants';
import { LoginStore } from '../../stores';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage } from '../../view';

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
//  <Login/>
    componentWillMount() {
        console.log(this.loginStore.customerData);
    }

    public render(): JSX.Element {
        return (
            <Router>
                <Route path='/' component={HomePage}/>
            </Router>
                
        );
    }
}