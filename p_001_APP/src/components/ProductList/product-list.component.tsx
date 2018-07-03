import * as React from 'react';
import { ProductStore } from '../../stores/product-strore/product.store';
import { inject, observer } from 'mobx-react';
import { PRODUCT_STORE, BASE_PIC_URL } from '../../constants';
import { ProductCard } from '../ProductCard/product-card.component';

import './product-list.style.scss';

@inject(PRODUCT_STORE)
@observer
export class ProductList extends React.Component {
    private productStore: ProductStore = this.props[PRODUCT_STORE];

    componentWillMount() {
        this.productStore.setProducts();
    }

    public render(): JSX.Element {
        return (
            <div className="p-list">
                {
                    this.productStore.products ? this.productStore.products.map((item, index) => {
                        return (
                           <ProductCard
                                imgUrl={BASE_PIC_URL + item.picture}
                                title={item.name}
                                manufacturer={item.manufacturer}
                                key={index}/>
                        );
                    }) :
                        <h1>...LOADING</h1>
                }
            </div>
        );
    }
}