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
    public customerId: number;

    @ForeignKey(() => Product)
    @Column
    public productId: number;

    @ForeignKey(() => Group)
    @Column
    public groupId: number;
}
