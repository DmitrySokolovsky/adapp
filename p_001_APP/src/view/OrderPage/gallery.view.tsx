import * as React from 'react';
import './gallery.style.scss';
import { inject as injectStore, observer } from 'mobx-react';
import { PRODUCT_STORE } from '../../constants';
import { ProductStore } from '../../stores/product-strore/product.store';

@injectStore(PRODUCT_STORE)
@observer
export class OrderPage extends React.Component<{}, {}> {
    private productStore: ProductStore = this.props[PRODUCT_STORE];
    public getProds() {
        this.productStore.setProducts();
    }

    public render(): JSX.Element {
        return (
            <div className="gallery-container">
                <h1 className="welcome">Welcome</h1>
                <button onClick={this.getProds.bind(this)}>Get prods</button>
            </div>
        );
    }
}