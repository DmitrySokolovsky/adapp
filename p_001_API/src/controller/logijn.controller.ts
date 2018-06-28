import { controller, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';

@controller('/api/login')
export class LoginController {

    @httpPost('/')
    public logIn(request: Request, response: Response): void {

        passport.authenticate('local', { session: true }, (err, customer, info) => {
            if (err || !customer) {

                return response.status(400).json({
                    message: 'Error',
                    customer: customer
                });
            }

            request.login(customer, { session: true }, (err) => {
                if (err) {
                    response.send(err);
                }

                const token = jwt.sign(customer, 'secret');
                
                return response.json({customer, token});
            });
        });
    }
}
