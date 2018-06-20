import * as React from 'react';
import { IAddCompProps } from './add-view-model';

export class AddComp extends React.Component<IAddCompProps ,{}> {
    public render (): JSX.Element {
        return (
            <li>
                {
                    this.props.str
                }
            </li>
        );
    }
}