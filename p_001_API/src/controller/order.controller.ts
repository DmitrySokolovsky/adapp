import { httpGet, controller } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { inject } from 'inversify';
import { IOrderRepo } from '../repo';

@controller('/order')
export class OrderController {
    constructor(
        @inject(IOrderRepo) private orderRepo: IOrderRepo
    ) { }

    @httpGet('/')
    public getAllOrders(request: Request, response: Response): Promise<Response> {
        return new Promise((resolve, reject) => {
            resolve(this.orderRepo.getAllOrders().then(results => response.json(results)));
        });
    }
}
