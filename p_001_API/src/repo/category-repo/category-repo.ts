import { Category } from '../../models';
import { ICategoryRepo } from './category-repo.interface';

import { injectable, inject } from "inversify";
import { LoggerService } from "../../service";
import { LogStatus } from "../../constant";
import { sequelize } from "../../instances";

@injectable()
export class CategoryRepository implements ICategoryRepo {

    public constructor(@inject(LoggerService) private loggerService: LoggerService) { 
        this.loggerService.log(`User Repository usage`, LogStatus.INFO);
    }

    public getCategories(): Promise<Category[]> {
        return new Promise<Category[]>((resolve, reject) => {
            Category.sequelize.query('SELECT * FROM "Category"', {type: sequelize.QueryTypes.SELECT})
            .then(result => resolve(result))
            .catch(error => reject(this.loggerService.log(error.errmsg, LogStatus.ERROR)));
        });
    }
}
