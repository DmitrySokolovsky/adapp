import { controller, httpGet, httpPost, httpPut } from 'inversify-express-utils';
import { Request, Response } from 'express';
// import { inject } from 'inversify';

@controller('/a')
export class CustomerController {
    constructor() { console.log('Hello from controller'); }

    @httpGet('/')
    public getSmth(request: Request, response: Response): Promise<Response> {
        return new Promise((resolve, reject) => {
            response.send("IT'S FUCKIN WORKS!!!");
        });
    }
}
