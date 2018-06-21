import { Table, Column, Model } from 'sequelize-typescript';
import 'reflect-metadata';

@Table({
    timestamps: false
})
export class Customer extends Model<Customer> {
    @Column
    public name: string;

    @Column
    public company: string;

    @Column
    public phone: string;

    @Column
    public email: string;

    @Column
    public password: string;
}

export abstract class CustomerAddModel {
    public name: string;
    public company: string;
    public phone: string;
    public email: string;
    public password: string;
}

export abstract class CustomerLoginModel {
    public email: string;
    public password: string;
}
