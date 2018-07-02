import { ProductModel } from "../../models/product/product.model";
import { injectable } from "inversify";

@injectable()
export abstract class IProductRepo {
    public abstract getAllProducts(): Promise<ProductModel[]>;
}