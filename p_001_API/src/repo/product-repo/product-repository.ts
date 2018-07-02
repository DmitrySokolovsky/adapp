import { injectable } from "inversify";
import * as sequelize from 'sequelize';

// import { LoggerService } from "../../service";
// import { LogStatus } from "../../constant";

import { ProductModel, Product } from '../../models';
import { IProductRepo } from "./product-repo-interface";

@injectable()
export class ProductRepository implements IProductRepo {
    public getAllProducts(): Promise<ProductModel[]> {
        return new Promise<ProductModel[]>((resolve, reject) => {
            Product.sequelize.query('SELECT "name", "manufacturer", "picture" FROM "Product"', { type: sequelize.QueryTypes.SELECT })
            .then(results => resolve(results as ProductModel[]));
        });
    }
}
