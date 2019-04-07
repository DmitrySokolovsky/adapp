import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import 'reflect-metadata';
import { Topic } from './topic-models.model';

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

    @Column
    public pic: string;

    @Column
    public tech_name: string;

    @HasMany(() => Topic)
    public topics: Topic[];
}

export abstract class CategoryModel {
    public name: string;
    public description: string;
    public pic: string;
    public tech_name: string;
}
