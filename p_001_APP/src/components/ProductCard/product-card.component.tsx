import * as React from 'react';
import { CardShared, CardMediaShared, ButtonShared } from '../../common/shared-components';
import { CardContent, Typography, CardActions } from 'material-ui';
import { IProductCardProps, IProductCardState } from './product-card.interface';

import './product-card.style.scss';

export class ProductCard extends React.PureComponent<IProductCardProps, IProductCardState> {
    constructor(props: IProductCardProps) {
        super(props);
    }

    public render(): JSX.Element {
        const { title, imgUrl, manufacturer } = this.props;
        return (
            <CardShared classes="card">
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
                <CardActions>
                    <ButtonShared label="add" disabled={false}/>
                </CardActions>
            </CardShared>
        );
    }
}