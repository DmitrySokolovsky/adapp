import * as React from 'react';
import { Button as MaterialButton } from 'material-ui';

import { IButtonSharedProps } from './button.shared.interface';

export class ButtonShared extends React.PureComponent<IButtonSharedProps> {
    public static defaultProps: Partial<IButtonSharedProps> = {
        appearance: 'main',
        classes: '',
    };

    public onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (this.props.onClick) {
            this.props.onClick(this.props.name, this.props.value);
        }
    }

    public render(): JSX.Element {
        return (
            <MaterialButton
                className={this.props.classes}
                onClick={this.onClick}
                disabled={this.props.disabled}
            >
                {this.props.label}
            </MaterialButton>
        );
    }
}