import { IOrderRepo } from "./order-repo-interface";
import { OrderModel, Order, Customer } from "../../models";
import * as sequelize from 'sequelize';
import { injectable } from "inversify";

@injectable()
export class OrderRepository implements IOrderRepo {
    public getAllOrders(): Promise<OrderModel[]> {
        return new Promise<OrderModel[]> ((resolve, reject) => {
            Order.sequelize.query('SELECT p.name AS p_name, c.name FROM "Order" AS "o" JOIN "Product" AS "p" ON p.id=o.product_id JOIN "Customer" AS "c" ON c.id=o.customer_id',
            {type: sequelize.QueryTypes.SELECT}) 
            .then(results => resolve(results));
        });
    }
}
