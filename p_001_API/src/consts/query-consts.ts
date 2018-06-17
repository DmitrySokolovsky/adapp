import { injectable } from 'inversify';

@injectable()
export class CustomerQuery {
    public qGetAllCustomers: string = 'SELECT * FROM customers';
    public qSetNewCustomer: string = 'INSERT INTO customers (name,age) VALUES ($1,$2)';
}
