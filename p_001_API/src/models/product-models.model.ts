import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import 'reflect-metadata';

@Table({
    timestamps: false
})
export class Product extends Model<Product> {
    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number;

    @Column
    public name: string;

    @Column
    public manufacturer: string;
}

export abstract class ProductModel {
    public name: string;
    public manufacturer: string;
}
