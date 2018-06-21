import * as React from 'react';
import { CustomerAddModel } from '../../models/customer/customer.models';

export class Login extends React.Component<{}, {}> {
    customer: CustomerAddModel;
    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div>
                <label htmlFor="email"></label>
                <input type="text" id="email"/>
                <label htmlFor="password"></label>
                <input type="text" id="password"/>
                <button>Login</button>
            </div>
        );
    }
}
