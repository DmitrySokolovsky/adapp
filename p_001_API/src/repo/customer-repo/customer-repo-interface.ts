import { Customer, CustomerModel } from "../../models/customer-models.model";

export abstract class ICustomerRepo {
    public abstract addCustomer(customer: CustomerModel): Promise<Customer[]>;
    public abstract getAllCustomers(): Promise<Customer[]>;
    public abstract customerLogInCheck(param: CustomerModel): Promise<Customer>;
    public abstract getCustomerWithName(email: string): Promise<Customer>;
}
