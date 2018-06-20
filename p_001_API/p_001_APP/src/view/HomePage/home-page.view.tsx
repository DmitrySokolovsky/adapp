import * as React from 'react';

export class HomePage extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>HOME</h1>
            </div>
        );
    }
}
