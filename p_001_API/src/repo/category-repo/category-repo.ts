import { Category, Topic } from '../../models';
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

    // public getCategories(): Promise<Category[]> {
    //     return new Promise<Category[]>((resolve, reject) => {
    //         Category.sequelize.query('SELECT * FROM "Category"', {type: sequelize.QueryTypes.SELECT})
    //         .then(result => resolve(result))
    //         .catch(error => reject(this.loggerService.log(error.errmsg, LogStatus.ERROR)));
    //     });
    // }

    public getCategories(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            Category.sequelize.query(`SELECT c.id, c.name, c.description, c.tech_name, (
                SELECT json_agg(item )
                FROM (
                    SELECT t.id AS id, t.name AS name
                    FROM "Topic" AS t WHERE t.category_id = c.id ORDER BY t.id DESC LIMIT 3
                ) AS item 
            ) AS items 
            FROM "Category" AS c`, {type: sequelize.QueryTypes.SELECT})
            .then(result => resolve(result))
            .catch(error => reject(this.loggerService.log(error.errmsg, LogStatus.ERROR)));
        });
    }
}
/* 
SELECT c.name, json_agg(json_build_object('name',t.name,'id',t.id)) as topic_arr FROM "Category" AS c
LEFT JOIN (
	SELECT * FROM "Topic" LIMIT 3
) AS t ON t.category_id = c.id
GROUP BY 1
WHERE t.name IS NOT NULL*/
