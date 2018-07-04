import { Table, Column, Model, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import 'reflect-metadata';
import { Customer } from './customer-models.model';
import { Product } from './product-models.model';
import { Group } from './group-model.models';

@Table({
    timestamps: false
})
export class Order extends Model<Order> {
    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number;

    @ForeignKey(() => Customer)
    @Column
    public customer_id: number;

    @ForeignKey(() => Product)
    @Column
    public product_id: number;

    @ForeignKey(() => Group)
    @Column
    public group_id: number;

    @Column
    public count: number;
}

export abstract class OrderModel {
    public customerName: string;
    public productName: string;
    public productManufacturer: string;
    public count: number;
}
