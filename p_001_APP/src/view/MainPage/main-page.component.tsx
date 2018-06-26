import * as React from "react";
import { Paper } from "material-ui";
import { LoggedContent } from "../../components";

export class MainPage extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <LoggedContent>
                <Paper elevation={3}>
                    <h1>Hello</h1>
                </Paper>

            </LoggedContent>
        );
    }
}