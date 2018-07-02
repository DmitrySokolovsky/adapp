import { observable, action } from 'mobx';
import { inject } from '../../services/services-regestration';
import { ProductModel } from '../../models/product/product.model';
import { IProductRepo } from '../../services';


export class ProductStore {
    @inject(IProductRepo) private productRepo: IProductRepo;

    @observable public products: ProductModel[];

    @action setProducts() {
        this.productRepo.getAllProducts().then(result => this.products = result);
    }
}