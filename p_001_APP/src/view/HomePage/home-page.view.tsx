import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from '../MainPage/main-page.component';
//import { Paper } from 'material-ui';
import { Login, Header } from '../../components';
import { GalleryPage } from '../GalleryPage';
import { inject } from 'mobx-react';
import { LOGIN_CUSTOMER_STORE } from '../../constants';
//import { LoginStore } from '../../stores';

@inject(LOGIN_CUSTOMER_STORE)
export class HomePage extends React.Component<{}, {}> {
    //private loginStore: LoginStore = this.props[LOGIN_CUSTOMER_STORE];

    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={GalleryPage} />
                    <Route path='/login' component={Login} />
                    <Route path="/main" component={MainPage} />
                </Switch>
            </div>
        );
    }
}
