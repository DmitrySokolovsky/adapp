import { CustomerRepository } from "./customer-repository-model";
import { CustomerModel } from "../../models/customer-model";
import * as pg from 'pg';
import { BASE_DB_URL } from "../../consts/base";
import { inject, injectable } from "inversify";
import { CustomerQuery } from "../../consts/query-consts";

const client = new pg.Client({
    connectionString: BASE_DB_URL
});

@injectable()
export class CustomerRepositoryImplementation implements CustomerRepository {
    @inject(CustomerQuery) customerQuery: CustomerQuery

    public setNewCustomer(customer: CustomerModel): void {
        client.connect();
        client.query(this.customerQuery.qSetNewCustomer, [customer.name, customer.phone], (err, result) => {

            if (err) {
                console.log(err.stack);
            } else {
                res.sendStatus(200);
            }

            client.end();
        });
    }

    public getAllCustomers(): Promice<CustomerModel[]>| null {
        client.connect();
        client.query(this.customerQuery.qGetAllCustomers, [], (err, res) => {
            let result;
            if (err) {
                console.log(err.stack);
                return null;
            } else {
                result = res.rows;
                return result as Array<CustomerModel>;
            }
            
            client.end();
        });
    }
}