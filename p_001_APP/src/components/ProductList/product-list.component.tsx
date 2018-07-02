import * as React from 'react';
import { ProductStore } from '../../stores/product-strore/product.store';
import { inject, observer } from 'mobx-react';
import { PRODUCT_STORE, BASE_PIC_URL } from '../../constants';

@inject(PRODUCT_STORE)
@observer
export class ProductList extends React.Component {
    private productStore: ProductStore = this.props[PRODUCT_STORE];

    componentWillMount() {
        this.productStore.setProducts();
    }

    public render(): JSX.Element {
        return (
            <div>
                {
                    this.productStore.products ? this.productStore.products.map((item, index) => {
                        return (<div key={index}>  
                            <img src={BASE_PIC_URL + item.picture} className="pic"/>                          
                            <h3>{item.name}</h3>
                            <div>{item.manufacturer}</div>
                        </div>);
                    }) :
                    <h1>...LOADING</h1>
                }
            </div>
        );
    }
}