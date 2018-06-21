import * as React from 'react';
import { IRootState } from './root.interface';
import { Login } from '..';
import { HomePage } from '../../view';

export class Root extends React.Component<{}, IRootState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            user: null
        };
    }

    public render(): JSX.Element {
        return (
            <div>
                {
                    !!this.state.user ?
                    <HomePage/> :
                    <Login/> 
                }
            </div>
        );
    }
}
