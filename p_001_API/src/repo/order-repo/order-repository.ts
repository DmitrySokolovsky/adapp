import { IOrderRepo } from "./order-repo-interface";
import { OrderModel, Order, Customer } from "../../models";
import * as sequelize from 'sequelize';
import { injectable } from "inversify";

@injectable()
export class OrderRepository implements IOrderRepo {
    public getAllOrders(id: string): Promise<OrderModel[]> {
        return new Promise<OrderModel[]> ((resolve, reject) => {
            Order.sequelize.query(`select * from get_orders_by_id(${id})`,
            {type: sequelize.QueryTypes.SELECT}) 
            .then(results => resolve(results));
        });
    }
}
