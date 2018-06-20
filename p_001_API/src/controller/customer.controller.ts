import { controller, httpGet, httpPost, httpPut } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { CustomerRepository, ICustomerRepo } from '../repo';
import { CustomerAddModel } from '../models';
import { inject } from 'inversify';
import { LoggerService } from '../service';
import { LogStatus } from '../constant';

@controller('/customers')
export class CustomerController {
    public gGetAll: ICustomerRepo;
    constructor(
        @inject(ICustomerRepo) customerRepo: ICustomerRepo,
        @inject(LoggerService) private loggerService: LoggerService
    ) { }

    @httpGet('/')
    public getSmth(request: Request, response: Response): Promise<Response> {
        return new Promise((resolve, reject) => {
            resolve(this.gGetAll.getAllCustomers().then(data => response.json(data)));
            reject(this.loggerService.log('Unhandled error', LogStatus.ERROR));
        });
    }

    @httpPost('/')
    public postSmth(request: Request, response: Response): Promise<Response> {
        const oParams = request.body;
        const params: CustomerAddModel = {
            name: oParams.name,
            company: oParams.company,
            phone: oParams.phone,
            email: oParams.email
        };

        return new Promise((resolve, reject) => {
            resolve(this.gGetAll.addCustomer(params).then(() => response.sendStatus(200)));
            reject(this.loggerService.log('Unhandled error', LogStatus.ERROR));
        });
    }
}
