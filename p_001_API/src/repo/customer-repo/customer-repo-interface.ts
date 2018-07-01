import { CustomerAddModel, Customer, CustomerLoginModel } from "../../models/customer-models.model";

export abstract class ICustomerRepo {
    public abstract addCustomer(customer: CustomerAddModel): Promise<Customer[]>;
    public abstract getAllCustomers(): Promise<Customer[]>;
    public abstract customerLogInCheck(param: CustomerLoginModel): Promise<Customer>;
    public abstract getCustomerWithEmail(email: string): Promise<Customer>;
}
