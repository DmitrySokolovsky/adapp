import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Header, ProductList } from '../../components';
import { OrderPage } from '../OrderPage';
import { inject } from 'mobx-react';
import { LOGIN_CUSTOMER_STORE } from '../../constants';
import { LoginStore } from '../../stores';
import { IHomePageProps, IHomePageState } from './home-page.interface';

@inject(LOGIN_CUSTOMER_STORE)
export class HomePage extends React.Component<IHomePageProps, IHomePageState> {
    private loginStore: LoginStore = this.props[LOGIN_CUSTOMER_STORE];

    constructor(props: IHomePageProps) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount(): void {
        this.loginStore.setCustomerData();
        this.setState({ 
            loading: false
        });
    }

    public render(): JSX.Element {
        let { loading } = this.state;
        if (loading) {
            return (
                <h1>...Loading</h1>
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={OrderPage} />
                    <Route path='/login' component={Login} />
                    <Route path='/product_list' component={ProductList} />
                </Switch>
            </div>
        );
    }
}
