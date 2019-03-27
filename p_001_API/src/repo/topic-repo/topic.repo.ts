import { Category, Topic, TopicModel } from '../../models';
import { ITopicRepo } from './topic.interface';

import { injectable, inject } from "inversify";
import { LoggerService } from "../../service";
import { LogStatus } from "../../constant";
import { sequelize } from "../../instances";

@injectable()
export class TopicRepository implements ITopicRepo {

    public constructor(@inject(LoggerService) private loggerService: LoggerService) { 
        this.loggerService.log(`User Repository usage`, LogStatus.INFO);
    }

    public addTopic(id: number, name: string): Promise<any> {
        let oParams: TopicModel = {
            category_id: id,
            name: name
        };

        return new Promise<any>((resolve, reject) => {
            Topic.create(oParams).then(
                (res) => {
                    this.loggerService.log(`Set success ${res}`, LogStatus.INFO);

                    return resolve();
                }
            ).catch(
                (error) => {
                    this.loggerService.log(error.errmsg, LogStatus.ERROR);
                    
                    return reject();
                }
            );
        });
    }
}
