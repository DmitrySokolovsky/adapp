import { controller, httpGet } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { IProductRepo } from '../repo';
// import { ProductModel } from '../models';
import { inject } from 'inversify';
// import { LoggerService } from '../service';
// import { LogStatus } from '../constant';

@controller('/api/products')
export class ProductController {
    constructor(
        @inject(IProductRepo) private productRepo: IProductRepo
    ) { }

    @httpGet('/')
    public getProducts(reguest: Request, response: Response): Promise<Response> {
        return new Promise((resolve, reject) => {
            resolve(this.productRepo.getAllProducts().then(data => response.json(data)));
        });
    }
}
