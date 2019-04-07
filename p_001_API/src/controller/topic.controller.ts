import { controller, httpPost, httpGet } from 'inversify-express-utils';
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
        const oParams: any = {
            id: request.body.id,
            name: request.body.name
        };
        console.log('+++++', request.body);

        return new Promise<Response>((resolve, reject) => {
            resolve(this.topicRepo.addTopic(oParams.id, oParams.name).then((res) => res.status(200).send()).catch((err) => response.send(err)));
            reject(this.loggerService.log('Unhandled error', LogStatus.ERROR));
        });
    }
}
