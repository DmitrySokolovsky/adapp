import { CustomerAddModel, Customer } from "../../models/customer-models.model";

export abstract class ICustomerRepo {
    public abstract addCustomer(customer: CustomerAddModel): Promise<Customer[]>;
    public abstract getAllCustomers(): Promise<Customer[]>;
}
