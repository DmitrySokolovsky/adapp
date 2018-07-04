import { OrderModel } from '../../models';

export abstract class IOrderRepo {
    public abstract getAllOrders(): Promise<OrderModel[]>; 
}
