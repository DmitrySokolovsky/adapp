import { injectable } from 'inversify';
import axios from 'axios';
import { BASE_API_URL } from '../../constants';
import { IProductRepo } from './product.interface';
import { ProductModel } from '../../models/product/product.model';

@injectable()
export class ProductRepository extends IProductRepo {
    public getAllProducts(): Promise<ProductModel[]> {
        return axios.get(BASE_API_URL + '/products').then(response => response.data);
    }
}