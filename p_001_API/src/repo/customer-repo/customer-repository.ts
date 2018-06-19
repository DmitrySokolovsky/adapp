import { Customer, CustomerAddModel } from "../../models/customer-models.model";
import { ICustomerRepo } from "./customer-repo-interface";

export class CustomerRepository implements ICustomerRepo {
    
    public constructor() { 
        
        console.log('created');
    }

    public addCustomer(oParams: CustomerAddModel): void {
        const customer: CustomerAddModel = {
            name: oParams.name,
            company: oParams.company,
            phone: oParams.phone,
            email: oParams.email
        };
        
        Customer.create(customer);
        console.log('SAVED');
    }

    public getAllCustomers(): void {
        Customer.findAll().then((customers) => console.log(customers));
    }
}
