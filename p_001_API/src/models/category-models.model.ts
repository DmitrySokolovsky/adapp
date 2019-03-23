import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import 'reflect-metadata';

@Table({
    timestamps: false
})
export class Category extends Model<Category> {
    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number;

    @Column
    public name: string;

    @Column
    public description: string;
}

export abstract class CategoryModel {
    public name: string;
    public description: string;
}
