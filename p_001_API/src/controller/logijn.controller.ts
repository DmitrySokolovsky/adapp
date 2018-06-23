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

    @httpPost('/')
    public postSmth(request: Request, response: Response): Promise<Response> {
        const oParams = request.body;

        request.session.email = oParams.email;
        request.session.password = oParams.password;

        const params: CustomerLoginModel = {
            email: oParams.email,
            password: oParams.password
        };

        return new Promise((resolve, reject) => {
            resolve(this.customerRepo.customerLogInCheck(params).then((result) => response.send('done')).catch(() => response.send(500)));
            reject(this.loggerService.log('Unhandled error', LogStatus.ERROR));
        });
    }

    @httpGet('/') 
    public getSmt(request: Request, response: Response): void {
        if (request.session.email) {
            response.redirect('/');
        } else {
            response.redirect('/loginn/index.html');
        }
    }
}
