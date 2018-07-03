import * as React from 'react';
import { CardShared, CardMediaShared } from '../../common/shared-components';
import { CardContent, Typography, CardActions, Checkbox } from 'material-ui';
import { IProductCardProps, IProductCardState } from './product-card.interface';

import './product-card.style.scss';

export class ProductCard extends React.PureComponent<IProductCardProps, IProductCardState> {
    constructor(props: IProductCardProps) {
        super(props);
        this.state = {
            selected: false
        } as IProductCardState;
    }

    private onProductSelect(): void {
        this.setState({
            selected: !this.state.selected
        });
    }

    public render(): JSX.Element {
        const { title, imgUrl, manufacturer } = this.props;
        let { selected } = this.state;

        return (
            <CardShared classes={selected ? "card card-selected" : "card"}>
                <CardMediaShared
                    imageUrl={imgUrl}
                    classes="card__media"
                    title={title} />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2" className="">
                        {title}
                    </Typography>
                    <Typography component="p">
                        {manufacturer}
                    </Typography>
                </CardContent>
                <CardActions className="card__actions">
                    <Typography component="p">
                        Select
                    </Typography>
                    <Checkbox
                        checked={this.state.selected}
                        onChange={this.onProductSelect.bind(this)}
                        color="primary"/>
                </CardActions>
            </CardShared>
        );
    }
}