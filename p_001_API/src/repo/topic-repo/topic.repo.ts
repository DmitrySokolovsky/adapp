import { Category, Topic } from '../../models';
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
        return new Promise<any>((resolve, reject) => {
            Category.sequelize.query('INSERT INTO "Topic" (category_id, name) VALUES' + "'" + id + "', '" + name + "'", {type: sequelize.QueryTypes.INSERT})
            .then(result => resolve(result))
            .catch(error => reject(this.loggerService.log(error.errmsg, LogStatus.ERROR)));
        });
    }
}
