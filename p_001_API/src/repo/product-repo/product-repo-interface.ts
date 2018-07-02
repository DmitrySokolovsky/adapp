import { ProductModel } from '../../models';

export abstract class IProductRepo {
    public abstract getAllProducts(): Promise<ProductModel[]>; 
}
