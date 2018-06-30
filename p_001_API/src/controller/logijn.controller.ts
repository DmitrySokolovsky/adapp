import { controller, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { inject } from 'inversify';
import { ICustomerRepo } from '../repo';
import { LoggerService } from '../service';
import { CustomerLoginModel } from '../models';
import { LogStatus } from '../constant';
import * as jwt from 'jsonwebtoken';

@controller('/api/login')
export class LoginController {
    constructor(
        @inject(ICustomerRepo) private customerRepo: ICustomerRepo,
        @inject(LoggerService) private loggerService: LoggerService
    ) { }

    @httpPost('/')
    public logIn(request: Request, response: Response): Promise<Response> {
        const oParams: CustomerLoginModel = {
            email: request.body.email,
            password: request.body.password
        };

        return new Promise((resolve, reject) => {
            resolve(this.customerRepo.customerLogInCheck(oParams).then(() => response.json({token: jwt.sign(oParams, 'feed')})));
            reject(this.loggerService.log('Unhandled error', LogStatus.ERROR));
        });
    }
}
