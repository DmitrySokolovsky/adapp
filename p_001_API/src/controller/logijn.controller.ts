import { controller, httpGet, httpPost, httpPut } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { CustomerRepository, ICustomerRepo } from '../repo';
import { CustomerLoginModel } from '../models';
import { inject } from 'inversify';
import { LoggerService } from '../service';
import { LogStatus } from '../constant';

@controller('/login')
export class LoginController {
    constructor(
        @inject(ICustomerRepo) private customerRepo: ICustomerRepo,
        @inject(LoggerService) private loggerService: LoggerService
    ) { }

    // @httpGet('/')
    // public getSmth(request: Request, response: Response): Promise<Response> {
    //     return new Promise((resolve, reject) => {
    //         resolve(this.customerRepo.getAllCustomers().then(data => response.json(data)));
    //         reject(this.loggerService.log('Unhandled error', LogStatus.ERROR));
    //     });
    // }

    @httpPost('/')
    public postSmth(request: Request, response: Response): Promise<Response> {
        const oParams = request.body;
        const params: CustomerLoginModel = {
            email: oParams.email,
            password: oParams.password
        };

        return new Promise((resolve, reject) => {
            resolve(this.customerRepo.customerLogInCheck(params).then((result) => response.send(result)).catch(() => response.send(500)));
            reject(this.loggerService.log('Unhandled error', LogStatus.ERROR));
        });
    }
}
