import * as React from 'react';
import { ICardMediaSharedProps } from './card-media.shared.interface';
import { CardMedia } from 'material-ui';

export class CardMediaShared extends React.PureComponent<ICardMediaSharedProps> {
    public render(): JSX.Element {
        return (
            <CardMedia
                className={this.props.classes}
                image={this.props.imageUrl}
                title={this.props.title}
                >
                    {this.props.children}
            </CardMedia>
        );
    }
}