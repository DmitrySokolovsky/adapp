import { controller, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { inject } from 'inversify';
import { ITopicRepo } from '../repo';
import { LoggerService } from '../service';
import * as passport from 'passport';
import { LogStatus } from '../constant';

@controller('/api/topic', passport.authenticate('jwt', {session: false}))
export class TopicController {
    constructor(
        @inject(ITopicRepo) private topicRepo: ITopicRepo,
        @inject(LoggerService) private loggerService: LoggerService
    ) { }

    @httpPost('/')
    public addTopic(request: Request, response: Response): Promise<Response> {
        console.log('++++++++++++++');
        console.log(request);

        return new Promise<Response>((resolve, reject) => {
            resolve(this.topicRepo.addTopic(1, 'Hello').then(data => response.json(data)).catch((err) => response.send(err)));
            reject(this.loggerService.log('Unhandled error', LogStatus.ERROR));
        });
    }
}
