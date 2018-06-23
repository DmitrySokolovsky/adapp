import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Login } from '../../components';

export class HomePage extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Router>
                <div>
                    <Link to="/login">login</Link>
                    <Route path='/login' component={Login}/>
                </div>
            </Router>
        );
    }
}
