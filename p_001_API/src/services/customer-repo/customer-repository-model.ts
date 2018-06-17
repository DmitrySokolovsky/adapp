import { CustomerModel } from '../../models/customer-model';

export abstract class CustomerRepository {
    public abstract setNewCustomer(customer: CustomerModel): void;
    public abstract getAllCustomers(): Promice<CustomerModel[]> | null;
}