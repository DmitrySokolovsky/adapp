import { controller, httpGet } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { inject } from 'inversify';
import { ICategoryRepo } from '../repo';
import { LoggerService } from '../service';
import * as passport from 'passport';
import { LogStatus } from '../constant';

@controller('/api/categories', passport.authenticate('jwt', {session: false}))
export class CategoryController {
    constructor(
        @inject(ICategoryRepo) private categoryRepo: ICategoryRepo,
        @inject(LoggerService) private loggerService: LoggerService
    ) { }

    @httpGet('/')
    public getCategories(request: Request, response: Response): Promise<Response> {

        return new Promise<Response>((resolve, reject) => {
            resolve(this.categoryRepo.getCategories().then(data => response.json(data)).catch((err) => response.send({message: "Error with categories"})));
            reject(this.loggerService.log('Unhandled error', LogStatus.ERROR));
        });
    }
}
