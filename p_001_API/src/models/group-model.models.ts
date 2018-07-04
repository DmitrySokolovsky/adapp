import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import 'reflect-metadata';
import { Customer } from './customer-models.model';

@Table
export class Group extends Model<Group> {
    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number;

    @ForeignKey(() => Customer)
    @Column
    public customerCreatorId: number;
}
