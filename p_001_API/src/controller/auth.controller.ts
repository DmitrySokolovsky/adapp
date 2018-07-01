import { controller, httpPost, response } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { inject } from 'inversify';
import { ICustomerRepo } from '../repo';
import { LoggerService } from '../service';
import * as passport from 'passport';
import { LogStatus } from '../constant';
// import { CustomerLoginModel } from '../models';
// import { LogStatus } from '../constant';
// import * as jwt from 'jsonwebtoken';

@controller('/api/auth', passport.authenticate('jwt', {session: false}))
export class AuthController {
    constructor(
        @inject(ICustomerRepo) private customerRepo: ICustomerRepo,
        @inject(LoggerService) private loggerService: LoggerService
    ) { }

    @httpPost('/')
    public getAuthData(request: Request, response: Response): Promise<Response> {
        console.log(request.user, "request.body*******************************");

        return new Promise<Response>((resolve, reject) => {
            resolve(this.customerRepo.getCustomerWithEmail(request.user.email).then(data => response.json(data)).catch((err) => response.send(err)));
            reject(this.loggerService.log('Unhandled error', LogStatus.ERROR));
        });
    }
}
