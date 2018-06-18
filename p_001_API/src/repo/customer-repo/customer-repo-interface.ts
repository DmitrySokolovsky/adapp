import { CustomerAddModel } from "../../models/customer-models";

export abstract class ICustomerRepo {
    public abstract addCustomer(customer: CustomerAddModel): void;
    public abstract getAllCustomers(): void;
}
