import * as React from 'react';
import { Route,  Switch } from 'react-router-dom';
import { MainPage } from '../MainPage/main-page.component';
//import { Paper } from 'material-ui';
import { Login } from '../../components';
import { GalleryPage } from '../GalleryPage';

export class HomePage extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div>
                
                <Switch>
                    <Route exact path='/' component={GalleryPage}/>
                    <Route path='/login' component={Login} />
                    <Route path="/main_page" component={MainPage} />
                </Switch>


            </div>
        );
    }
}
