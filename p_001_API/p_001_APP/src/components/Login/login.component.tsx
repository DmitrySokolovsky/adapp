import * as React from 'react';

export class Login extends React.Component<{}, {}> {
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
