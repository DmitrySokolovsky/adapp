import { injectable, inject } from "inversify";

// import { LoggerService } from "../../service";
// import { LogStatus } from "../../constant";

import { ProductModel, Product } from '../../models';
import { IProductRepo } from "./product-repo-interface";

@injectable()
export class ProductRepository implements IProductRepo {
    public getAllProducts(): Promise<ProductModel[]> {
        return new Promise<ProductModel[]>((resolve, reject) => {
            Product.sequelize.query('SELECT * FROM Products').then(result => resolve(result));
        });
    }
}
