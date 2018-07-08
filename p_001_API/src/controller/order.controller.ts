import { httpGet, controller, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { inject } from 'inversify';
import { IOrderRepo } from '../repo';

@controller('/api/order')
export class OrderController {
    constructor(
        @inject(IOrderRepo) private orderRepo: IOrderRepo
    ) { }

    @httpPost('/')
    public getAllOrders(request: Request, response: Response): Promise<Response> {
        let customerId = request.body.id;

        return new Promise((resolve, reject) => {
            resolve(this.orderRepo.getAllOrders(customerId).then(results => response.json(results)));
        });
    }
}
