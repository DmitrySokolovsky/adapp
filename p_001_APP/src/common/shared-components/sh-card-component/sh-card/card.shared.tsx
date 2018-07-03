import * as React from 'react';
import { ICardSharedProps } from './card.shared.interface';
import { Card } from 'material-ui';

export class CardShared extends React.PureComponent<ICardSharedProps> {
    public static defaultProps: Partial<ICardSharedProps> = {
        classes: '',
    };

    public render(): JSX.Element {
        return (
            <Card className={this.props.classes}>{this.props.children}</Card>
        );
    }
}